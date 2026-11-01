// Reflection tool: a single high-risk factor is never averaged away.
export function experienceState(values) {
  const highest = Math.max(...values);
  const total = values.reduce((sum, value) => sum + value, 0);
  const expression = Math.max(highest / 100 * 0.8, total / 300);
  let message = 'A safer, more predictable experience.';
  if (expression > 0 && expression < 0.25) {
    message = 'Some uncertainty is entering the experience. Consider what you can change to reduce risk.';
  } else if (expression >= 0.25 && expression < 0.5) {
    message = 'The experience may be less predictable. Pause and consider the dose, how you feel and who can support you.';
  } else if (expression >= 0.5 && expression < 0.75) {
    message = 'There is greater potential for an unpleasant or unpredictable experience and harm. Consider delaying use and moving to a safer, supported setting.';
  } else if (expression >= 0.75) {
    message = 'A high-risk factor can make the experience dangerous and unpredictable, even when other factors feel safer. Pause and seek support.';
  }
  if (values.every(value => value >= 75)) {
    message = 'There is a very high likelihood that the experience will be unpredictable and dangerous, with a high risk of harm.';
  }
  return { level: expression >= 0.75 ? 'higher' : expression >= 0.25 ? 'uncertain' : 'lower', expression, message };
}

export function setupExperienceTool() {
  const tool = document.getElementById('experience-tool');
  if (!tool) return;
  const sliders = [...tool.querySelectorAll('input[type="range"]')];
  const endpoints = [
    ['Low and/or known dose', 'Some dose uncertainty', 'High and/or unknown dose'],
    ['Happy, relaxed', 'Mixed or unsettled feelings', 'Sad, angry'],
    ['Familiar, safe, supported', 'Some uncertainty about setting or support', 'Unfamiliar, unsafe, alone']
  ];
  const update = () => {
    const values = sliders.map(slider => Number(slider.value));
    const state = experienceState(values);
    tool.dataset.level = state.level;
    sliders.forEach((slider, index) => {
      const value = values[index];
      const description = endpoints[index][value === 0 ? 0 : value === 100 ? 2 : 1];
      const text = description;
      slider.style.setProperty('--slider-colour', `hsl(${value <= 50 ? 120 - value * 1.8 : 60 - value * 0.6} 70% 45%)`);
      slider.setAttribute('aria-valuetext', text);
      document.getElementById(`${slider.id}-value`).textContent = text;
    });
    document.getElementById('experience-message').textContent = state.message;
    const amount = state.expression;
    document.getElementById('experience-mouth').setAttribute('d', `M 52 104 Q 90 ${140 - amount * 68} 128 104`);
    document.getElementById('experience-brow-left').setAttribute('d', `M 49 ${65 - amount * 7} L 71 ${65 + amount * 7}`);
    document.getElementById('experience-brow-right').setAttribute('d', `M 109 ${65 + amount * 7} L 131 ${65 - amount * 7}`);
    document.getElementById('experience-face-circle').setAttribute('fill', `hsl(${amount <= 0.5 ? 120 - amount * 180 : 60 - amount * 60} 70% 62%)`);
  };
  sliders.forEach(slider => slider.addEventListener('input', update));
  tool.querySelector('button').addEventListener('click', () => {
    sliders.forEach(slider => { slider.value = 0; });
    update();
  });
  update();
}
