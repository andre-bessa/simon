import { audioCtx, masterVolume } from './audio.js';
import { board } from './index.js';
import { game } from './index.js';

export default class Button {
  constructor(id, color, lightColor, shadowColor, tone) {
    // Properties
    this._id = id;
    this._el = document.getElementById(id);
    this._color = color;
    this._lightColor = lightColor;
    this._shadowColor = shadowColor;
    this._tone = tone;
    this._oscillator = audioCtx.createOscillator();
    this._volume = audioCtx.createGain();
    this._isPressed = false;

    // Initial style
    this._el.style.boxShadow = `0px 12px ${this._shadowColor}`;
    this._setNormalColor();

    // Audio setup
    this._oscillator.type = 'square';
    this._oscillator.frequency.setValueAtTime(this._tone, audioCtx.currentTime);
    this._oscillator.connect(this._volume);
    this._volume.gain.setValueAtTime(0, audioCtx.currentTime);
    this._volume.connect(masterVolume);
    this._oscillator.start(audioCtx.currentTime);

    // Events
    this._el.addEventListener('mousedown', e => {
      e.preventDefault();
      this._press();
    });
    this._el.addEventListener('mouseleave', e => {
      e.preventDefault();
      if (this._isPressed) {
        this._isPressed = false;
        this._el.style.transform = 'initial';
        this._el.style.boxShadow = `0px 12px ${this._shadowColor}`;
        this._setNormalColor();
        this._stopSound();
        console.log('> Input Canceled');
      }
    });
    this._el.addEventListener('mouseup', e => {
      e.preventDefault();
      this._release();
    });
    this._el.addEventListener('touchstart', e => {
      e.preventDefault();
      this._press();
    });
    this._el.addEventListener('touchend', e => {
      e.preventDefault();
      this._release();
    });
  }
  _press() {
    if (!this._isPressed && !board.isPlayingAnimation) {
      this._isPressed = true;
      this._el.style.transform = 'translateY(7px)';
      this._el.style.boxShadow = `0px 5px ${this._shadowColor}`;
      if (!game.isOver && !board.isPlayingAnimation) {
        this._setPressedColor();
        this._playSound();
      }
    }
  }
  _release() {
    if (this._isPressed) {
      this._isPressed = false;
      this._el.style.transform = 'initial';
      this._el.style.boxShadow = `0px 12px ${this._shadowColor}`;
      if (!game.isOver && !board.isPlayingAnimation) {
        this._setNormalColor();
        this._stopSound();
        game.getAnswer(this._id);
      }
    }
  }
  play(duration) {
    this._setPressedColor();
    this._playSound();
    setTimeout(() => {
      this._setNormalColor();
      this._stopSound();
    }, duration * 2 / 3);
  }
  _setPressedColor() {
    this._el.style.backgroundImage =
      `radial-gradient(120px, ${this._lightColor}, ${this._color})`;
  }
  _setNormalColor() {
    this._el.style.backgroundImage =
      `radial-gradient(160px at 200px 10px, ${this._lightColor}, ${this._color})`;
  }
  _playSound() {
    this._volume.gain.linearRampToValueAtTime(1, audioCtx.currentTime);
  }
  _stopSound() {
    this._volume.gain.setValueAtTime(0, audioCtx.currentTime);
  }
  get id() {
    return this._id;
  }
}