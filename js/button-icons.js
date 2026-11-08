// Decorative icons stay separate from button labels and survive dynamic text updates.
export function setupButtonIcons() {
  const selector = 'button, a.btn-primary, a.btn-secondary, a.intro-link';
  const update = () => {
    document.querySelectorAll(selector).forEach(button => {
      if (button.querySelector('svg, img') || button.matches('.theme-toggle, .modal-close-btn') || /\p{Extended_Pictographic}/u.test(button.textContent)) {
        delete button.dataset.buttonIcon;
        return;
      }
      const text = (button.textContent + ' ' + (button.id || '') + ' ' + (button.getAttribute('href') || '')).toLowerCase();
      let icon = 'check';
      if (button.matches('.stepper-dot')) icon = ({1:'person',2:'phone',3:'airway',5:'person',7:'check'})[button.dataset.step] || 'check';
      else if (/reset|restart|retry/.test(text)) icon = 'reset';
      else if (/stop.*metronome/.test(text)) icon = 'stop';
      else if (/metronome/.test(text)) icon = 'play';
      else if (/copy/.test(text)) icon = 'copy';
      else if (/clear|delete/.test(text)) icon = 'delete';
      else if (/gps|coords|location/.test(text)) icon = 'pin';
      else if (/water|cup|hydration/.test(text)) icon = 'water';
      else if (/dose|timer/.test(text)) icon = 'clock';
      else if (/previous|back/.test(text)) icon = 'back';
      else if (/next|finish/.test(text)) icon = 'next';
      else if (/nasal|nyxoid/.test(text)) icon = 'spray';
      else if (/injection|prenoxad/.test(text)) icon = 'syringe';
      else if (/map|directions in|Get directions/i.test(text)) icon = 'map';
      else if (/events|bbq/.test(text)) icon = 'calendar';
      else if (/gallery|art\.cahma/.test(text)) icon = 'art';
      else if (/clinic|health care/.test(text)) icon = 'health';
      else if (button.matches('.filter-btn')) icon = 'filter';
      else if (/website|https?:/.test(text)) icon = 'web';
      button.dataset.buttonIcon = icon;
    });
  };
  update();
  new MutationObserver(update).observe(document.body, {childList: true, subtree: true, characterData: true});
}
