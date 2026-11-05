"""Local app server with a same-origin, hourly cached The Know RSS adapter."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.request import urlopen, Request
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
import xml.etree.ElementTree as ET
import json
import time
import threading

ROOT = Path(__file__).resolve().parents[1]
FEED = 'https://theknow.org.au/alerts/feed/'
NS = '{https://theknow.org.au/customfields}'
STATES = {'ACT', 'NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT'}

class PlainText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.parts = []
    def handle_data(self, data):
        self.parts.append(data)

def text(html):
    parser = PlainText()
    parser.feed(html or '')
    return ' '.join(' '.join(parser.parts).split())

def parse_feed(xml):
    root = ET.fromstring(xml)
    items = []
    for item in root.findall('./channel/item'):
        url = item.findtext('link', '')
        if not url.startswith('https://theknow.org.au/'):
            continue
        categories = [c.text or '' for c in item.findall('category')]
        description = text(item.findtext('description', '')).split('Read more')[0]
        media = item.find('{http://search.yahoo.com/mrss/}content')
        image = media.get('url', '') if media is not None else ''
        if not image.startswith('https://theknow.org.au/'):
            image = ''
        items.append(dict(image=image, title=item.findtext('title', ''), url=url,
            date=parsedate_to_datetime(item.findtext('pubDate')).isoformat(),
            state=next((c for c in categories if c in STATES), 'Australia'),
            type=next((c for c in categories if c not in STATES and c.lower() not in {'yellow', 'red', 'orange', 'green'}), 'Drug alert'),
            source=item.findtext(NS + 'source_organisation', 'The Know'),
            summary=description[:700]))
    if not items:
        raise ValueError('No valid alerts in feed')
    return dict(checkedAt=datetime.now(timezone.utc).isoformat(), feed=FEED,
                items=sorted(items, key=lambda i: i['date'], reverse=True))

cache = None
checked = 0
lock = threading.Lock()

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)
    def do_GET(self):
        global cache, checked
        if self.path.split('?')[0] != '/api/know-alerts':
            return super().do_GET()
        try:
            with lock:
                if cache is None or time.time() - checked > 3600:
                    request = Request(FEED, headers={'User-Agent': 'PlayItSafe-AlertReader/1.0'})
                    with urlopen(request, timeout=12) as response:
                        cache = parse_feed(response.read(2_000_000))
                    checked = time.time()
            payload = json.dumps(cache).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(payload)
        except Exception:
            self.send_error(503, 'The Know feed is temporarily unavailable')

if __name__ == '__main__':
    print('Preview: http://127.0.0.1:8000/#cantest', flush=True)
    ThreadingHTTPServer(('127.0.0.1', 8000), Handler).serve_forever()
