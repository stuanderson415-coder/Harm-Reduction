const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
export function sourceMarkers(sources, prefix, indices = sources.map((_, index) => index)) {
  return indices.length ? `<sup class="source-markers">${indices.map(index => `<a class="source-marker" href="#${escape(prefix)}-source-${index + 1}" aria-label="Source ${index + 1}">[${index + 1}]</a>`).join(' ')}</sup>` : '';
}
export function sourceList(sources, prefix) {
  if (!sources.length) return '';
  return `<details class="source-list"><summary>Source</summary><ol>${sources.map((source,index) => `<li id="${escape(prefix)}-source-${index + 1}" tabindex="-1"><a href="${escape(source.url)}" target="_blank" rel="noopener">${escape(source.title)}</a>${source.license && source.licenseUrl ? ` — <a href="${escape(source.licenseUrl)}" target="_blank" rel="noopener">${escape(source.license)}</a>` : ''}</li>`).join('')}</ol></details>`;
}
export function setupSourceLinks() {
  document.addEventListener('click', event => {
    const marker = event.target.closest('.source-marker');
    if (!marker) return;
    const target = document.getElementById(marker.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    target.closest('details').open = true;
    target.scrollIntoView({block:'nearest'});
    target.focus({preventScroll:true});
  });
}
