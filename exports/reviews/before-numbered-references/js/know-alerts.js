const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const formatDate = value => new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Australia/Sydney' }).format(new Date(value));

export function setupKnowAlerts(container) {
  if (!container) return;
  let data, filter = 'ACT', page = 0;
  container.innerHTML = `<div class="know-toolbar"><div class="know-filters" role="group" aria-label="Alert location"><button type="button" data-region="ACT" aria-pressed="true">ACT</button><button type="button" data-region="all" aria-pressed="false">All Australia</button></div><a class="know-view-all" href="https://theknow.org.au/" target="_blank" rel="noopener noreferrer">View all alerts on The Know ↗</a></div><p class="know-status" role="status">Last retrieved: — · Source: theknow.org.au</p><div class="know-cards"></div><div class="know-pages"></div><p class="know-credit">Alerts supplied by <a href="https://theknow.org.au/" target="_blank" rel="noopener noreferrer">The Know</a>. Dates are publication dates, not a statement that a risk has ended.</p>`;
  const status = container.querySelector('.know-status');
  function render() {
    if (!data) return;
    const items = data.items.filter(item => filter === 'all' || item.state === 'ACT');
    const pages = Math.ceil(items.length / 3);
    page = Math.min(page, Math.max(0, pages - 1));
    container.querySelector('.know-cards').innerHTML = items.slice(page * 3, page * 3 + 3).map(item => {
      const url = new URL(item.url);
      if (url.origin !== 'https://theknow.org.au') return '';
      const image = typeof item.image === 'string' && item.image.startsWith('https://theknow.org.au/')
        ? `<a class="know-thumbnail" href="${escapeHTML(url.href)}" target="_blank" rel="noopener noreferrer" aria-label="View image and full alert: ${escapeHTML(item.title)}"><img src="${escapeHTML(item.image)}" alt="Image supplied with this notice by The Know" width="76" height="76" loading="lazy" referrerpolicy="no-referrer"></a>` : '';
      return `<article class="alert-card ${item.type.toLowerCase().includes('notice') ? 'info' : 'warning'} know-alert">${image}<div class="know-meta"><span class="know-state">${escapeHTML(item.state)}</span><span>${escapeHTML(item.type)}</span><time datetime="${escapeHTML(item.date)}">${escapeHTML(formatDate(item.date))}</time></div><h4>${escapeHTML(item.title)}</h4><p class="know-issuer">Issued by ${escapeHTML(item.source)} · via The Know</p><details><summary>Alert summary</summary><p>${escapeHTML(item.summary)}</p><a href="${escapeHTML(url.href)}" target="_blank" rel="noopener noreferrer">Read full alert on The Know ↗</a></details></article>`;
    }).join('') || '<p class="know-empty">No ACT alerts in the current feed. Choose All Australia or visit The Know for its full archive.</p>';
    container.querySelector('.know-pages').innerHTML = pages > 1 ? `<button type="button" data-page="-1" ${page === 0 ? 'disabled' : ''}>← Previous</button><span>Page ${page + 1} of ${pages}</span><button type="button" data-page="1" ${page + 1 === pages ? 'disabled' : ''}>Next →</button>` : `<span>${items.length} ${filter === 'ACT' ? 'ACT ' : ''}alert${items.length === 1 ? '' : 's'} in this feed</span>`;
    container.querySelectorAll('[data-region]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.region === filter)));
  }
  container.addEventListener('error', event => {
    if (event.target.matches('.know-thumbnail img')) event.target.closest('.know-thumbnail').remove();
  }, true);
  container.addEventListener('click', event => {
    const region = event.target.closest('[data-region]');
    const navigation = event.target.closest('[data-page]');
    if (region) { filter = region.dataset.region; page = 0; render(); }
    if (navigation) { page += Number(navigation.dataset.page); render(); }
  });
  async function read(url) {
    const response = await fetch(url, { signal: AbortSignal.timeout(15000), cache: 'no-store' });
    if (!response.ok) throw new Error('Feed unavailable');
    const result = await response.json();
    if (!Array.isArray(result.items) || !result.items.length || !Number.isFinite(Date.parse(result.checkedAt))) throw new Error('Invalid feed');
    return result;
  }
  async function refresh() {
    try {
      data = await read('/api/know-alerts');
      status.textContent = `Last retrieved: ${formatDate(data.checkedAt)} · Source: theknow.org.au`;
      status.classList.remove('know-saved');
      render();
    } catch {
      if (data) {
        status.textContent = `Last retrieved: ${formatDate(data.checkedAt)} · Source: theknow.org.au`;
      } else {
        status.textContent = 'Last retrieved: — · Source: theknow.org.au';
      }
      status.classList.remove('know-saved');
    }
  }
  // A bundled, dated snapshot keeps the section useful on static hosting or offline.
  read('data/know-alerts.json').then(snapshot => {
    if (!data) {
      data = snapshot;
      status.textContent = `Last retrieved: ${formatDate(data.checkedAt)} · Source: theknow.org.au`;
      render();
    }
  }).catch(() => {}).finally(refresh);
  setInterval(refresh, 3600000);
}
