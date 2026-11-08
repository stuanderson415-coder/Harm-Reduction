import fs from 'node:fs';
import assert from 'node:assert/strict';
const source = fs.readFileSync(new URL('../js/interactions-data.js', import.meta.url), 'utf8');
const { INTERACTION_SUBSTANCES: substances, INTERACTION_PAIRS: pairs, RISK_LEVELS: levels, findInteraction } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const review = JSON.parse(fs.readFileSync(new URL('../exports/reviews/substance-combinations-2026-11-09.json', import.meta.url)));
const ratings = {D:'DANGEROUS', U:'UNSAFE', C:'CAUTION', N:'NOT_ASSESSED'};
assert.equal(substances.length,12);
assert.equal(pairs.length,66);
const ids = new Set(substances.map(s=>s.id));
const keys = new Set();
for (const pair of pairs) {
  assert(ids.has(pair.substanceA) && ids.has(pair.substanceB));
  assert.notEqual(pair.substanceA,pair.substanceB);
  assert(levels[pair.level]);
  assert(!pair.level.startsWith('LOW_RISK'));
  const key=[pair.substanceA,pair.substanceB].sort().join('|');
  assert(!keys.has(key), `Duplicate ${key}`); keys.add(key);
  assert(pair.sources.length>0);
  for(const source of pair.sources) assert.equal(new URL(source.url).protocol,'https:');
  assert(!/remove unsupported|retain high-risk|preserve Dangerous|editorial proposal|50%|physiologically safe/i.test(pair.summary));
}
for(let a=0;a<substances.length;a++) for(let b=a+1;b<substances.length;b++) {
  const forward=findInteraction(substances[a].id,substances[b].id);
  assert(forward); assert.equal(forward,findInteraction(substances[b].id,substances[a].id));
}
for(const row of review.pairs) assert.equal(findInteraction(row.a_id,row.b_id).level,ratings[row.proposed]);
assert.equal(findInteraction('mdma','methamphetamine').level,'UNSAFE');
assert.match(findInteraction('mdma','methamphetamine').summary,/overamping/);
assert.equal(findInteraction('mdma','lsd').level,'CAUTION');
assert.equal(findInteraction('mdma','psilocybin').level,'CAUTION');
assert.match(findInteraction('cannabis','lsd').summary,/rare psychosis/);
assert.match(findInteraction('opioids','methamphetamine').summary,/Masked effects/);
assert.match(findInteraction('ghb','methamphetamine').summary,/Masked GHB/);
assert.equal(findInteraction('methamphetamine','nitrous-oxide').level,'NOT_ASSESSED');
assert.equal(findInteraction('missing','alcohol'),undefined);
assert.equal(findInteraction('alcohol','alcohol'),undefined);
const app=fs.readFileSync(new URL('../js/app.js',import.meta.url),'utf8');
assert(!/reduce doses of both substances by at least 50%|Caution \/ Unrated Pair|match\.mechanism/.test(app));
console.log('Passed: all 66 review ratings, 132 selection orders, unique valid pairs, source links, unknown/same-substance handling, and key warning copy.');
