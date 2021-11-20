let t,e;const i=document.getElementById("volume"),n=()=>{t||(t=new AudioContext,e=t.createGain(),e.connect(t.destination),e.gain.value=i.valueAsNumber,i.addEventListener("change",(function(){e.gain.setValueAtTime(this.valueAsNumber,t.currentTime)})))};function s(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t).value}function a(t,e,i){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");var n=e.get(t);if(!n.writable)throw new TypeError("attempted to set read only private field");return n.value=i,i}function h(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}var r=new WeakSet,o=new WeakSet,l=new WeakSet;class d{on(){s(this,u).classList.add(s(this,v)),h(this,r,m).call(this)}off(){s(this,u).classList.remove(s(this,v)),s(this,f).call(this)}constructor(t,e,i){u.set(this,{writable:!0,value:void 0}),c.set(this,{writable:!0,value:!1}),w.set(this,{writable:!0,value:void 0}),v.set(this,{writable:!0,value:void 0}),p.set(this,{writable:!0,value:void 0}),f.set(this,{writable:!0,value:void 0}),r.add(this),o.add(this),l.add(this),a(this,u,document.getElementById(t)),a(this,w,i),a(this,v,`btn-${e}-on`),a(this,p,`btn-${e}-pressed`),s(this,u).addEventListener("pointerdown",h(this,o,g).bind(this)),s(this,u).addEventListener("pointerup",h(this,l,k).bind(this)),s(this,u).addEventListener("pointerleave",(t=>{s(this,c)&&(h(this,l,k).call(this,t),console.log("> Input Canceled"))}))}}var u=new WeakMap,c=new WeakMap,w=new WeakMap,v=new WeakMap,p=new WeakMap,f=new WeakMap;function m(){a(this,f,(i=>{const n=t.createOscillator(),s=t.createGain();return n.connect(s),s.connect(e),n.type="square",n.frequency.value=i,s.gain.value=0,s.gain.setTargetAtTime(1,t.currentTime,.1),n.start(t.currentTime),()=>n.stop()})(s(this,w)))}function g(t){t.preventDefault(),a(this,c,!0),this.on(),t.target.classList.add(s(this,p))}function k(t){t.preventDefault(),a(this,c,!1),this.off(),t.target.classList.remove(s(this,p))}var b=new WeakSet,W=new WeakSet;class y{playSequence(t,e){a(this,M,!0);const i=(t,n)=>{n!==t.length?(h(this,b,S).call(this,t[n],e-100),setTimeout(i,e,t,n+1)):a(this,M,!1)};setTimeout(i,e,t,0)}loseAnimation(t){h(this,W,T).call(this,t/2),setTimeout((()=>h(this,W,T).call(this,t+200)),t)}get isPlayingAnimation(){return s(this,M)}constructor(){E.set(this,{writable:!0,value:{0:new d(0,"green",440),1:new d(1,"red",329.628),2:new d(2,"yellow",261.626),3:new d(3,"blue",220)}}),M.set(this,{writable:!0,value:!1}),b.add(this),W.add(this)}}var E=new WeakMap,M=new WeakMap;function S(t,e){s(this,E)[t].on(),setTimeout((()=>s(this,E)[t].off()),e)}function T(t){a(this,M,!0);for(const t in s(this,E))s(this,E)[t].on();setTimeout((()=>{for(const t in s(this,E))s(this,E)[t].off();a(this,M,!1)}),t)}var L=new WeakSet,A=new WeakSet,I=new WeakSet,B=new WeakSet,q=new WeakSet,D=new WeakSet;var G=new WeakMap,P=new WeakMap,C=new WeakMap,x=new WeakMap,N=new WeakMap,$=new WeakMap,O=new WeakMap;function V(t){const e=parseInt(t.target.id);h(this,A,j).call(this,e)&&(t.preventDefault(),h(this,I,z).call(this,e)?s(this,C)>=s(this,P).length&&h(this,q,H).call(this):h(this,B,F).call(this))}function j(t){return 0<=t&&t<=3}function z(t){var e;return s(this,P)[(a(this,C,1+(e=+s(this,C))),e)]===t}function F(){a(this,x,!0),s(this,G).loseAnimation(s(this,O))}function H(){var t,e;a(this,C,0),h(this,D,J).call(this),s(this,P).push((t=0,e=4,Math.floor(Math.random()*(e-t)+t))),s(this,G).playSequence([...s(this,P)],s(this,O))}function J(){s(this,$).textContent=s(this,N).toString().padStart(2,"0"),a(this,N,1+ +s(this,N))}const K=new class{newGame(){s(this,G).isPlayingAnimation||(a(this,x,!1),a(this,P,[]),a(this,N,0),h(this,q,H).call(this))}constructor(){G.set(this,{writable:!0,value:new y}),P.set(this,{writable:!0,value:[]}),C.set(this,{writable:!0,value:0}),x.set(this,{writable:!0,value:!0}),N.set(this,{writable:!0,value:0}),$.set(this,{writable:!0,value:document.getElementById("score")}),O.set(this,{writable:!0,value:400}),L.add(this),A.add(this),I.add(this),B.add(this),q.add(this),D.add(this);const t=document.getElementById("board"),e=t=>{(s(this,x)||s(this,G).isPlayingAnimation)&&(t.preventDefault(),t.stopPropagation())};t.addEventListener("pointerdown",e,!0),t.addEventListener("pointerleave",e,!0),t.addEventListener("pointerup",e,!0),t.addEventListener("pointerup",h(this,L,V).bind(this))}};document.getElementById("new-game-btn").addEventListener("click",(()=>{n(),K.newGame()}));