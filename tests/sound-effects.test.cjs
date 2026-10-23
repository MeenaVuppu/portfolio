const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('fs'),vm=require('vm'),ts=require('typescript');
const source=ts.transpileModule(fs.readFileSync(require('node:path').join(__dirname,'../app/lib/soundEffects.ts'),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
function player({muted=false,mobile=false,blocked=false,slow=false,needsPrime=false,failFirst=false}={}){
 const state={gesture:false,time:0,starts:0,stops:0,resumes:0,primes:0,fetches:0};let release;
 class Context{
  state='suspended';destination={};
  createGain(){return {gain:{value:0},connect(){}}}
  decodeAudioData(){return Promise.resolve({duration:.2})}
  createBuffer(){return {silent:true}}
  resume(){state.resumes++;if((blocked&&!state.gesture)||(needsPrime&&!state.primes))return Promise.reject(new Error('NotAllowedError'));this.state='running';return Promise.resolve()}
  createBufferSource(){return {connect(){},disconnect(){},start(){if(this.buffer?.silent)state.primes++;else state.starts++},stop(){state.stops++}}}
 }
 const storage=new Map(muted?[['portfolio-interaction-sound','disabled']]:[]);
 const c={exports:{},fetch:()=>{state.fetches++;return failFirst&&state.fetches===1?Promise.reject(new Error('Network failure')):slow?new Promise(r=>release=()=>r({ok:true,arrayBuffer:()=>Promise.resolve(new ArrayBuffer(1))})):Promise.resolve({ok:true,arrayBuffer:()=>Promise.resolve(new ArrayBuffer(1))})},window:{navigator:{userActivation:{get isActive(){return state.gesture}}},AudioContext:Context,localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},matchMedia:()=>({matches:mobile}),performance:{now:()=>state.time}}};
 vm.runInNewContext(source,c);return {api:c.exports,state,release:()=>release(),storage};
}
const settle=async()=>{for(let n=0;n<12;n++)await Promise.resolve()};
test('gesture primes mobile audio once and a later settled drop remains audible',async()=>{
 const {api,state}=player({needsPrime:true});api.preloadInteractionTick();await settle();state.gesture=true;api.unlockInteractionTick();await settle();state.gesture=false;state.time=240;api.playInteractionTick();await settle();assert.equal(state.primes,1);assert.equal(state.starts,1);state.gesture=true;api.unlockInteractionTick();assert.equal(state.primes,1);
});
test('first permitted gesture retries a failed preload without duplicating navigation audio',async()=>{
 const {api,state}=player({failFirst:true});api.preloadInteractionTick();await settle();assert.equal(api.getInteractionTickAudio().buffer,null);state.gesture=true;api.unlockInteractionTick();api.playInteractionTick();await settle();assert.equal(state.fetches,2);assert.equal(state.starts,1);
});
test('gesture unlock survives until the settled drop, with one tick and unchanged volume',async()=>{
 const {api,state}=player({blocked:true});api.preloadInteractionTick();await settle();state.gesture=true;api.unlockInteractionTick();await settle();state.gesture=false;state.time=240;api.playInteractionTick();await settle();assert.equal(state.starts,1);assert.equal(api.getInteractionTickAudio().gain.gain.value,.4);
});
test('navigation ticks share the player and stop an overlapping prior tick',async()=>{
 const {api,state}=player();api.preloadInteractionTick();await settle();api.playInteractionTick();await settle();api.playInteractionTick();await settle();assert.equal(state.starts,2);assert.equal(state.stops,1);
});
test('saved mute blocks playback; enabling and disabling also affect the shared loading gain',async()=>{
 const {api,state,storage}=player({muted:true,mobile:true});api.preloadInteractionTick();await settle();api.unlockInteractionTick();api.playInteractionTick();await settle();assert.equal(state.starts,0);assert.equal(state.resumes,0);assert.equal(api.getInteractionTickAudio().gain.gain.value,0);api.setInteractionSoundEnabled(true);api.playInteractionTick();await settle();assert.equal(state.starts,1);assert.equal(api.getInteractionTickAudio().gain.gain.value,.32);api.setInteractionSoundEnabled(false);assert.equal(api.getInteractionTickAudio().gain.gain.value,0);assert.equal(state.stops,1);assert.equal(storage.get('portfolio-interaction-sound'),'disabled');
});
test('blocked autoplay stays silent and never replays missed ticks on later unlock',async()=>{
 const {api,state}=player({blocked:true});api.playInteractionTick();await settle();assert.equal(state.starts,0);state.gesture=true;api.unlockInteractionTick();await settle();assert.equal(state.starts,0);api.playInteractionTick();await settle();assert.equal(state.starts,1);
});
test('pending playback never bursts or replays a stale tick',async()=>{
 const p=player({slow:true});p.api.preloadInteractionTick();p.api.playInteractionTick();p.api.playInteractionTick();p.release();await settle();assert.equal(p.state.starts,1);
 const q=player({slow:true});q.api.playInteractionTick();q.state.time=501;q.release();await settle();assert.equal(q.state.starts,0);
});
test('intentional playback still cancels remaining loading sounds once per trigger',async()=>{
 const {api}=player();let interrupted=0;const remove=api.subscribeToInteractionTicks(()=>interrupted++);api.playInteractionTick();await settle();assert.equal(interrupted,1);remove();api.playInteractionTick();await settle();assert.equal(interrupted,1);
});
test('captured navigation plays once, but post-drop and untrusted clicks stay silent',()=>{
 const code=fs.readFileSync(require('node:path').join(__dirname,'../app/components/PortfolioExperience.tsx'),'utf8');
 assert(code.includes('onClickCapture={navigationClick}'));
 const handler=code.slice(code.indexOf('  function navigationClick'),code.indexOf('  function clearTransitionTimer'));
 let ticks=0;class Element{closest(selector){return selector==='[data-page-snapshot]'?null:this}getAttribute(){return null}matches(){return false}contains(target){return target===this}}
 const guard={current:null};const c={Element,window:{performance:{now:()=>100}},droppedAudioGuard:guard,playInteractionTick:()=>ticks++};vm.runInNewContext(ts.transpileModule(handler,{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText,c);
 const control=new Element(),event={button:0,nativeEvent:{isTrusted:true},target:control};c.navigationClick(event);assert.equal(ticks,1);
 guard.current={element:control,until:500};c.navigationClick(event);assert.equal(ticks,1,'release click must not duplicate settled-drop tick');guard.current=null;c.navigationClick({...event,nativeEvent:{isTrusted:false}});assert.equal(ticks,1);
 control.matches=()=>true;c.navigationClick(event);assert.equal(ticks,1,'music and mute controls keep their own behavior');
});
