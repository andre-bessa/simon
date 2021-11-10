const t=new AudioContext,e=t.createGain(),s=document.getElementById("volume");e.gain.setValueAtTime(s.valueAsNumber,t.currentTime),e.connect(t.destination),s.addEventListener("change",(function(){e.gain.setValueAtTime(this.valueAsNumber,t.currentTime)}));class i{_press(){this._isPressed||n.isPlayingAnimation||(this._isPressed=!0,this._el.style.transform="translateY(7px)",this._el.style.boxShadow=`0px 5px ${this._shadowColor}`,o.isOver||n.isPlayingAnimation||(this._setPressedColor(),this._playSound()))}_release(){this._isPressed&&(this._isPressed=!1,this._el.style.transform="initial",this._el.style.boxShadow=`0px 12px ${this._shadowColor}`,o.isOver||n.isPlayingAnimation||(this._setNormalColor(),this._stopSound(),o.getAnswer(this._id)))}play(t){this._setPressedColor(),this._playSound(),setTimeout((()=>{this._setNormalColor(),this._stopSound()}),2*t/3)}_setPressedColor(){this._el.style.backgroundImage=`radial-gradient(120px, ${this._lightColor}, ${this._color})`}_setNormalColor(){this._el.style.backgroundImage=`radial-gradient(160px at 200px 10px, ${this._lightColor}, ${this._color})`}_playSound(){this._volume.gain.linearRampToValueAtTime(1,t.currentTime)}_stopSound(){this._volume.gain.setValueAtTime(0,t.currentTime)}get id(){return this._id}constructor(s,i,n,o,l){this._id=s,this._el=document.getElementById(s),this._color=i,this._lightColor=n,this._shadowColor=o,this._tone=l,this._oscillator=t.createOscillator(),this._volume=t.createGain(),this._isPressed=!1,this._el.style.boxShadow=`0px 12px ${this._shadowColor}`,this._setNormalColor(),this._oscillator.type="square",this._oscillator.frequency.setValueAtTime(this._tone,t.currentTime),this._oscillator.connect(this._volume),this._volume.gain.setValueAtTime(0,t.currentTime),this._volume.connect(e),this._oscillator.start(t.currentTime),this._el.addEventListener("mousedown",(t=>{t.preventDefault(),this._press()})),this._el.addEventListener("mouseleave",(t=>{t.preventDefault(),this._isPressed&&(this._isPressed=!1,this._el.style.transform="initial",this._el.style.boxShadow=`0px 12px ${this._shadowColor}`,this._setNormalColor(),this._stopSound(),console.log("> Input Canceled"))})),this._el.addEventListener("mouseup",(t=>{t.preventDefault(),this._release()})),this._el.addEventListener("touchstart",(t=>{t.preventDefault(),this._press()})),this._el.addEventListener("touchend",(t=>{t.preventDefault(),this._release()}))}}const n=new class{playSequence(t,e){this._isPlayingAnimation=!0;const s=setInterval((()=>{0===t.length?(this._isPlayingAnimation=!1,clearInterval(s)):this._idToButton.get(t.shift()).play(e)}),e)}loseAnimation(){this._playAllButtons(200),setTimeout((()=>{this._playAllButtons(800)}),400)}_playAllButtons(t=300){this._isPlayingAnimation=!0,this._greenBtn.play(t),this._redBtn.play(t),this._yellowBtn.play(t),this._blueBtn.play(t),setTimeout((()=>{this._isPlayingAnimation=!1}),t)}get isPlayingAnimation(){return this._isPlayingAnimation}constructor(t,e,s,i){this._greenBtn=t,this._redBtn=e,this._yellowBtn=s,this._blueBtn=i,this._isPlayingAnimation=!1,this._idToButton=new Map,this._idToButton.set(this._greenBtn.id,this._greenBtn),this._idToButton.set(this._redBtn.id,this._redBtn),this._idToButton.set(this._yellowBtn.id,this._yellowBtn),this._idToButton.set(this._blueBtn.id,this._blueBtn)}}(new i(0,"hsl(150, 100%, 45%)","hsl(150, 100%, 85%)","hsl(150,  90%, 35%)",440),new i(1,"hsl(  0, 100%, 45%)","hsl(  0, 100%, 85%)","hsl(  0,  90%, 35%)",329.628),new i(2,"hsl( 60, 100%, 45%)","hsl( 60, 100%, 85%)","hsl( 60,  90%, 35%)",261.626),new i(3,"hsl(225,  55%, 45%)","hsl(225,  55%, 85%)","hsl(225,  45%, 35%)",220)),o=new class{getAnswer(t){if(!this._isOver&&!this._isPlayingAnimation){this._answer.push(t);const e=this._answer.length-1;if(this._answer[e]!==this._sequence[e])return this._isOver=!0,void n.loseAnimation();this._answer.length===this._sequence.length&&this._newRound()}}_newRound(){this._updateScore(),this._sequence.push(Math.floor(4*Math.random())),n.playSequence(this._sequence.slice(),500),this._answer=[]}newGame(){this._isOver=!1,this._sequence=[],this._answer=[],this._score=0,this._newRound(),t.resume()}get isOver(){return this._isOver}_updateScore(){document.getElementById("score").textContent=this._score.toString().padStart(2,"0"),this._score++}constructor(){this._isOver=!0,this._sequence=[],this._answer=[],this._score=0}};document.getElementById("new-game-btn").addEventListener("click",(()=>{n.isPlayingAnimation||o.newGame.call(o)}));