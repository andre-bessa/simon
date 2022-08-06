!function(){let t,e;const i=document.getElementById("volume"),n=()=>{t||(t=new AudioContext,e=t.createGain(),e.connect(t.destination),e.gain.value=i.valueAsNumber,i.addEventListener("change",(function(){e.gain.setValueAtTime(this.valueAsNumber,t.currentTime)})))},a=i=>{const n=t.createOscillator(),a=t.createGain();return n.connect(a),a.connect(e),n.type="square",n.frequency.value=i,a.gain.value=0,a.gain.setTargetAtTime(1,t.currentTime,.1),n.start(t.currentTime),()=>n.stop()};function s(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function r(t,e){return e.get?e.get.call(t):e.value}function o(t,e){return r(t,s(t,e,"get"))}function h(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function l(t,e,i){h(t,e),e.set(t,i)}function u(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}function c(t,e,i){return u(t,s(t,e,"set"),i),i}function d(t,e){if(e.set)return"__destrWrapper"in e||(e.__destrWrapper={set value(i){e.set.call(t,i)},get value(){return e.get.call(t)}}),e.__destrWrapper;if(!e.writable)throw new TypeError("attempted to set read only private field");return e}function w(t,e){return d(t,s(t,e,"update"))}function p(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function v(t,e){h(t,e),e.add(t)}var f=new WeakMap,m=new WeakMap,g=new WeakMap,W=new WeakMap,b=new WeakMap,k=new WeakMap,y=new WeakSet,E=new WeakSet,M=new WeakSet;class T{on(){o(this,f).classList.add(o(this,W)),p(this,y,S).call(this)}off(){o(this,f).classList.remove(o(this,W)),o(this,k).call(this)}constructor(t,e,i){v(this,y),v(this,E),v(this,M),l(this,f,{writable:!0,value:void 0}),l(this,m,{writable:!0,value:!1}),l(this,g,{writable:!0,value:void 0}),l(this,W,{writable:!0,value:void 0}),l(this,b,{writable:!0,value:void 0}),l(this,k,{writable:!0,value:void 0}),c(this,f,document.getElementById(t)),c(this,g,i),c(this,W,`btn-${e}-on`),c(this,b,`btn-${e}-pressed`),o(this,f).addEventListener("pointerdown",p(this,E,L).bind(this)),o(this,f).addEventListener("pointerup",p(this,M,A).bind(this)),o(this,f).addEventListener("pointerleave",(t=>{o(this,m)&&(p(this,M,A).call(this,t),console.log("> Input Canceled"))}))}}function S(){c(this,k,a(o(this,g)))}function L(t){t.preventDefault(),c(this,m,!0),this.on(),t.target.classList.add(o(this,b))}function A(t){t.preventDefault(),c(this,m,!1),this.off(),t.target.classList.remove(o(this,b))}var I=new WeakMap,_=new WeakMap,B=new WeakSet,q=new WeakSet;class C{playSequence(t,e){c(this,_,!0);const i=(t,n)=>{n!==t.length?(p(this,B,D).call(this,t[n],e-100),setTimeout(i,e,t,n+1)):c(this,_,!1)};setTimeout(i,e,t,0)}loseAnimation(t){p(this,q,G).call(this,t/2),setTimeout((()=>p(this,q,G).call(this,t+200)),t)}get isPlayingAnimation(){return o(this,_)}constructor(){v(this,B),v(this,q),l(this,I,{writable:!0,value:{0:new T(0,"green",440),1:new T(1,"red",329.628),2:new T(2,"yellow",261.626),3:new T(3,"blue",220)}}),l(this,_,{writable:!0,value:!1})}}function D(t,e){o(this,I)[t].on(),setTimeout((()=>o(this,I)[t].off()),e)}function G(t){c(this,_,!0);for(const t in o(this,I))o(this,I)[t].on();setTimeout((()=>{for(const t in o(this,I))o(this,I)[t].off();c(this,_,!1)}),t)}var P=new WeakMap,x=new WeakMap,N=new WeakMap,$=new WeakMap,j=new WeakMap,z=new WeakMap,O=new WeakMap,V=new WeakSet,F=new WeakSet,H=new WeakSet,J=new WeakSet,K=new WeakSet,Q=new WeakSet;function R(t){const e=parseInt(t.target.id);p(this,F,U).call(this,e)&&(t.preventDefault(),p(this,H,X).call(this,e)?o(this,N)>=o(this,x).length&&p(this,K,Z).call(this):p(this,J,Y).call(this))}function U(t){return 0<=t&&t<=3}function X(t){return o(this,x)[w(this,N).value++]===t}function Y(){c(this,$,!0),o(this,P).loseAnimation(o(this,O))}function Z(){var t,e;c(this,N,0),p(this,Q,tt).call(this),o(this,x).push((t=0,e=4,Math.floor(Math.random()*(e-t)+t))),o(this,P).playSequence([...o(this,x)],o(this,O))}function tt(){o(this,z).textContent=o(this,j).toString().padStart(2,"0"),w(this,j).value++}const et=new class{newGame(){o(this,P).isPlayingAnimation||(c(this,$,!1),c(this,x,[]),c(this,j,0),p(this,K,Z).call(this))}constructor(){v(this,V),v(this,F),v(this,H),v(this,J),v(this,K),v(this,Q),l(this,P,{writable:!0,value:new C}),l(this,x,{writable:!0,value:[]}),l(this,N,{writable:!0,value:0}),l(this,$,{writable:!0,value:!0}),l(this,j,{writable:!0,value:0}),l(this,z,{writable:!0,value:document.getElementById("score")}),l(this,O,{writable:!0,value:400});const t=document.getElementById("board"),e=t=>{(o(this,$)||o(this,P).isPlayingAnimation)&&(t.preventDefault(),t.stopPropagation())};t.addEventListener("pointerdown",e,!0),t.addEventListener("pointerleave",e,!0),t.addEventListener("pointerup",e,!0),t.addEventListener("pointerup",p(this,V,R).bind(this))}};document.getElementById("new-game-btn").addEventListener("click",(()=>{n(),et.newGame()}))}();