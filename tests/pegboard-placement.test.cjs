const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),ts=require('typescript');const root=require('node:path').resolve(__dirname, '..') + '/';const compile=s=>ts.transpileModule(s,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const style={content:'""',top:'-40px',left:'-1px',right:'-1px',bottom:'-1px',borderLeftWidth:'1px',borderTopWidth:'1px',backgroundPosition:'21.7px 19.6px,22px 20px,49.7px 61.6px,50px 62px',backgroundSize:'56px 84px,56px 84px,56px 84px,56px 84px',scale:'1',borderTopLeftRadius:'20',display:'block',visibility:'visible',opacity:'1'};
const ctx={exports:{},window:{matchMedia:()=>({matches:false}),getComputedStyle:(e,p)=>p?style:({...style,scale:e.lift||'1'})}};vm.runInNewContext(compile(fs.readFileSync(root+'app/lib/headphoneMount.ts','utf8')),ctx);const api=ctx.exports;
const board={offsetWidth:1000,clientLeft:1,clientTop:1,getBoundingClientRect:()=>({left:0,top:100,right:1000,bottom:900,width:1000,height:800}),querySelectorAll:()=>[item]};const item={dataset:{pegX:'0',pegY:'0'},style:{},lift:'1',getBoundingClientRect:()=>({left:300,top:200,right:400,bottom:260,width:100,height:60}),querySelector:()=>null,querySelectorAll:()=>[],closest:()=>null};const surface=api.dragPegboardSurface(board);assert.equal(surface.rect.top,61);assert(surface.holes.some(h=>h.y<100),'painted top row must be included');
const getBounds=()=>({left:300,top:200,right:400,bottom:260});const before=JSON.stringify(item);const preview=api.findElementPegPlacement(board,item,{x:0,y:-110},getBounds,surface);assert(preview);assert.equal(JSON.stringify(item),before,'preview must not mutate position');const afterY=200+preview.y;assert(afterY<100,'valid item can occupy painted area above layout root');assert(afterY>=73,'must remain inside painted board with edge clearance');
const legacy=api.findElementPegPlacement(board,item,{x:0,y:-110},getBounds);const applied=api.snapElementToNearestHole(board,item,{x:0,y:-110},getBounds);assert.deepEqual(applied,legacy,'initial layout/shuffle path unchanged');
const source=fs.readFileSync(root+'app/hooks/usePegboardDrag.ts','utf8');const finish=source.slice(source.indexOf('    function finishDrag'),source.indexOf('    function onClickCapture'));assert(!finish.includes('snapElementToNearestHole'),'no second snap decision after preview');assert(finish.includes('drag.snappedOffset ?? drag.startOffset'));let set=null,ticks=0;const timers=[];const el={dataset:{pegDraggable:'resume',pegX:'100',pegY:'40'},style:{},hasPointerCapture:()=>false,classList:{remove(){},add(){}},removeAttribute(){}};const c={active:{element:el,pointerId:1,moved:true,candidate:{x:300,y:120},snappedOffset:{x:173,y:-25},startOffset:{x:0,y:0},zIndex:''},boardElement:{getBoundingClientRect:()=>({})},hidePreview(){},relativeBox:()=>({left:100,top:100}),numberFromDataset:Number,hasPegAnchor:()=>true,setOffset:(e,p)=>set=p,onPlaced:()=>ticks++,window:{setTimeout:f=>timers.push(f),performance:{now:()=>0}},suppressedElement:null,suppressClickUntil:0};vm.runInNewContext(compile(finish),c);c.finishDrag({pointerId:1});assert.equal(set.x,173);assert.equal(set.y,-25);timers.forEach(f=>f());assert.equal(ticks,1);console.log('PASS: CSS grid includes painted top row; preview is pure; first-row position stays within board; legacy snap preserved; release exactly equals preview offset; one settled-drop tick.');
// Unpinned shelf/plant: the painted surface, not the inset layout root,
// defines their valid edge. Keep collisions and rounded corners active.
const geometry=source.slice(source.indexOf('const COLLISION_GAP'),source.indexOf('function setOffset'));
const g={};vm.runInNewContext(compile(geometry),g);
const size={width:440,height:147}, boardSize={width:1002,height:840};
const edge=g.nearestAnchor({x:100,y:4},size,[],boardSize,22,4);
assert(edge);assert.equal(edge.y,4);assert(!g.fitsBoard(g.boxAt({x:4,y:4},440,147),1002,840,22,4),'rounded corner still protected');
const side=g.nearestAnchor({x:558,y:100},size,[],boardSize,22,4);
assert.equal(side.x,558,'shelf can reach painted right edge with 4px clearance');
const occupied={left:500,right:1000,top:0,bottom:400,width:500,height:400};
const safe=g.nearestAnchor({x:558,y:100},size,[occupied],boardSize,22,4);
assert(safe);assert(!g.overlaps(g.boxAt(safe,size.width,size.height),occupied),'collision prevention remains active');
assert(!g.fitsBoard(g.boxAt({x:-1,y:100},440,147),1002,840,22,4),'outside board rejected');
console.log('PASS: shelf/plant painted top and side edges; rounded corners and collisions retained.');
const plantSize={width:200,height:330};
const plantEdge=g.nearestAnchor({x:100,y:4},plantSize,[],boardSize,22,4,{left:45,top:22,right:23,bottom:42});
assert(plantEdge);assert.equal(plantEdge.y,26,'plant foliage above collision box remains inside painted edge');
console.log('PASS: plant visual containment preserves existing inset collision geometry.');
const pin={matches:()=>false,getBoundingClientRect:()=>({left:340,right:360,top:185,bottom:210,width:20,height:25})};
const oldQuery=item.querySelector;item.dataset.pegX='0';item.dataset.pegY='0';
const firstRow=Math.min(...surface.holes.map(h=>h.y).filter(y=>y>=surface.rect.top+4));
for(const id of ['photo','resume','archive']) {
 item.dataset.pegDraggable=id;item.querySelector=()=>pin;
 const result=api.findElementPegPlacement(board,item,{x:0,y:-170},getBounds,surface);
 assert(result,`${id}: top row placement exists`);
 assert.equal(pin.getBoundingClientRect().top+3+result.y,firstRow,`${id}: upper attachment reaches first row`);
 assert(200+result.y>=surface.rect.top+4,`${id}: paper stays inside board`);
}
item.querySelector=oldQuery;
for(const id of ['linkedin','progress-note']) {
 item.dataset.pegDraggable=id;
 const result=api.findElementPegPlacement(board,item,{x:0,y:-170},getBounds,surface);
 assert(result);assert.equal(200+result.y,firstRow,`${id}: top edge reaches first row`);
}
console.log('PASS: all five requested items can reach the first painted row.');
// Regression: dragging above the top-left corner used to leave only corner
// candidates, all invalid for the plant's full foliage, and return null.
for(const x of [49,0,-100,779,950]) {
 const p=g.nearestAnchor({x,y:-100},plantSize,[],boardSize,22,4,{left:45,top:22,right:23,bottom:42});
 assert(p,'plant must find a nearby top-row placement when dragged past a corner');
 assert.equal(p.y,26,'plant must settle at the top clearance, not jump to a lower row');
 const visible={...g.boxAt(p,200,330),left:p.x-45,right:p.x+223,top:p.y-22,bottom:p.y+372};
 assert(g.fitsBoard(visible,1002,840,22,4),'full foliage remains inside rounded board');
 const again=g.nearestAnchor(p,plantSize,[],boardSize,22,4,{left:45,top:22,right:23,bottom:42});
 assert.equal(again.x,p.x);assert.equal(again.y,p.y,'repeat pickup/drop must preserve settled top-row position');
}
console.log('PASS: plant top-row placement near both corners and repeated placement remains stable.');
const anchoredIds=['digital-gold','vyapar-plus','fixed-deposit','photo','contact','resume','archive','headphones','linkedin','progress-note'];
for(const id of anchoredIds){
 item.dataset.pegDraggable=id;item.dataset.pegX='0';item.dataset.pegY='0';
 pin.matches=selector=>id==='headphones'?selector==='[data-headphone-mount-anchor]':['digital-gold','vyapar-plus','fixed-deposit'].includes(id)&&selector==='.project-file__clip';
 item.querySelector=()=>['contact','linkedin','progress-note'].includes(id)?null:pin;
 const result=api.findElementPegPlacement(board,item,{x:0,y:-170},getBounds,surface);
 assert(result,`${id}: valid top-row placement exists`);
 assert(200+result.y>=surface.rect.top+4);assert(200+result.y<=firstRow+20,`${id}: settles within first row band`);
}
console.log('PASS: all ten anchored pins plus shelf and plant have valid top-row placements.');
