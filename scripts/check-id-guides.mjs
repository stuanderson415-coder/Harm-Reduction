import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const load = async path => import('data:text/javascript;base64,' + fs.readFileSync(new URL(path, import.meta.url)).toString('base64'));
const { SUBSTANCES_DATA, DRUG_CATEGORIES } = await load('../js/drugs101-data.js');
const { sourceMarkers, sourceList } = await load('../js/references.js');
const code = fs.readFileSync(new URL('../js/app.js', import.meta.url), 'utf8');
const start = code.indexOf('  openSubstanceModal(drugId)');
const end = code.indexOf('  // --- INTERACTIONS SECTION ---', start);
let opened = false;
const content = { innerHTML: '' };
const modal = { classList: { add: name => { assert.equal(name, 'active'); opened = true; } } };
const context = vm.createContext({ SUBSTANCES_DATA, DRUG_CATEGORIES, sourceMarkers, sourceList, document: { getElementById: id => id === 'substance-modal' ? modal : content } });
const app = vm.runInContext(`({${code.slice(start, end)}, renderSubstancePhoto() { return ''; }})`, context);
for (const sub of SUBSTANCES_DATA) {
  opened = false;
  app.openSubstanceModal(sub.id);
  assert(opened, `${sub.id} did not open`);
  assert(content.innerHTML.includes(sub.name));
  assert(content.innerHTML.includes('Harm Reduction Guidelines'));
  assert(content.innerHTML.includes('<summary>Source</summary>'));
}
console.log(`Passed: all ${SUBSTANCES_DATA.length} ID guides render and open with references.`);
