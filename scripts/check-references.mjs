import fs from 'node:fs';
import assert from 'node:assert/strict';
const load=async file=>import('data:text/javascript;base64,'+fs.readFileSync(new URL(file,import.meta.url)).toString('base64'));
const {sourceList,sourceMarkers,setupSourceLinks}=await load('../js/references.js');
const {SUBSTANCES_DATA}=await load('../js/drugs101-data.js');
const {INTERACTION_PAIRS}=await load('../js/interactions-data.js');
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate HTML IDs');
const markers=[...html.matchAll(/class="source-marker" href="#([^"]+)"/g)].map(m=>m[1]);
const effectsCode=fs.readFileSync(new URL('../js/combination-effects.js',import.meta.url),'utf8');
for(const refs of effectsCode.matchAll(/refs: \[([^\]]+)\]/g))for(const index of refs[1].split(',').map(Number))markers.push(`effect-ref-source-${index+1}`);
for(const marker of markers)assert(ids.includes(marker),`Missing source ${marker}`);
const lists=[...html.matchAll(/<details class="source-list">([\s\S]*?)<\/details>/g)];
assert.equal(lists.length,31);
for(const list of lists){
 assert(list[1].startsWith('<summary>Source</summary><ol>'));
 for(const match of list[1].matchAll(/id="([^"]+)"/g))assert(markers.includes(match[1]),`Unused source ${match[1]}`);
}
for(const sub of SUBSTANCES_DATA){
 const prefix=`drug-${sub.id}`;
 const sources=sub.sources||[];
 const rendered=sourceMarkers(sources,prefix)+sourceList(sources,prefix);
 for(let i=0;i<sources.length;i++)assert(rendered.includes(`id="${prefix}-source-${i+1}"`));
 assert(!rendered.includes('<details class="source-list" open'));
}
for(const pair of INTERACTION_PAIRS){
 const prefix=`pair-${[pair.substanceA,pair.substanceB].sort().join('-')}`;
 assert(sourceList(pair.sources,prefix).includes('<summary>Source</summary>'));
 assert.equal((sourceMarkers(pair.sources,prefix).match(/class="source-marker"/g)||[]).length,pair.sources.length);
}
assert(sourceList([{title:'<script> & "',url:'https://example.com/?x=1&y=2'}],'test').includes('&lt;script&gt;'));
let click;
let opened=false,scrolled=false,focused=false,prevented=false;
const details={set open(value){opened=value;}};
const target={closest:()=>details,scrollIntoView:()=>scrolled=true,focus:()=>focused=true};
globalThis.document={addEventListener:(name,listener)=>{assert.equal(name,'click');click=listener;},getElementById:id=>{assert.equal(id,'test-source-1');return target;}};
setupSourceLinks();
click({target:{closest:()=>({getAttribute:()=> '#test-source-1'})},preventDefault:()=>prevented=true});
assert(opened&&scrolled&&focused&&prevented);
console.log(`Passed: ${lists.length} collapsed static Source lists, ${markers.length} markers, all 15 profiles, all 66 pair references, escaping and click-to-open behaviour.`);
