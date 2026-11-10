import { sourceMarkers } from './references.js';
// Conceptual illustrations only: values are not doses or predictions.
export const EFFECT_MODELS = {
  additive: { title: 'Additive', example: 'Methylphenidate (Ritalin) + cocaine: both can raise heart rate and blood pressure, adding cardiovascular strain. This illustrates overlapping effects, not a proven exact 1 + 1 response. Avoid combining them.', refs: [2, 3], amount: 2, equation: '1 + 1 = 2', text: 'The effects add together: the combined effect matches the expected additive effect.' },
  synergistic: { title: 'Synergism', example: 'Diazepam (Valium) + heroin: a benzodiazepine and an opioid can amplify suppression of breathing, causing fatal overdose. Alcohol + benzodiazepines is another potentially synergistic depressant combination.', refs: [4], amount: 3, equation: '1 + 1 > 2', text: 'The combined effect is greater than expected from adding the individual effects. Harm can increase unexpectedly.' },
  antagonistic: { title: 'Antagonism', example: 'Naloxone + heroin: naloxone blocks opioid receptors and can temporarily reverse opioid overdose. This is an emergency treatment, not a recreational combination. Always call 000; repeat naloxone and give CPR as directed.', refs: [5], amount: 1, equation: '1 + 1 < 2', text: 'One substance reduces or blocks an effect of another. A reduced effect does not mean the combination is safe or that other harms are cancelled out.' }
};
export function setupCombinationEffects() {
  const root = document.getElementById('combination-effects');
  if (!root) return;
  const buttons = root.querySelectorAll('[data-effect-model]');
  const render = key => {
    const model = EFFECT_MODELS[key];
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.effectModel === key)));
    root.querySelector('.effect-equation').textContent = model.equation;
    root.querySelector('.effect-explanation').textContent = model.text;
    root.querySelector('.effect-example').innerHTML = model.example + sourceMarkers([], 'effect-ref', model.refs);
    root.querySelector('.effect-result-fill').style.width = `${model.amount / 4 * 100}%`;
    root.querySelector('.effect-result-label').textContent = `${model.title}: ${model.amount} illustrative effect units`;
  };
  buttons.forEach(button => button.addEventListener('click', () => render(button.dataset.effectModel)));
  render('additive');
}
