import { playSound } from './audio.js';
import { board } from './index.js';
import { game } from './index.js';

export default class Button {
  #id;
  #el;
  #color;
  #lightColor;
  #shadowColor;
  #pitch;
  #stopSound;
  #isPressed = false;

  constructor(id, color, lightColor, shadowColor, pitch) {
    // Properties
    this.#id = id;
    this.#el = document.getElementById(id);
    this.#color = color;
    this.#lightColor = lightColor;
    this.#shadowColor = shadowColor;
    this.#pitch = pitch;

    // Initial style
    this.#el.style.boxShadow = `0px 12px ${this.#shadowColor}`;
    this.#setNormalColor();

    // Events
    this.#el.addEventListener('mousedown', e => {
      e.preventDefault();
      this.#press();
    });
    this.#el.addEventListener('mouseleave', e => {
      e.preventDefault();
      if (this.#isPressed) {
        this.#isPressed = false;
        this.#el.style.transform = 'initial';
        this.#el.style.boxShadow = `0px 12px ${this.#shadowColor}`;
        this.#setNormalColor();
        this.#stopSound();
        console.log('> Input Canceled');
      }
    });
    this.#el.addEventListener('mouseup', e => {
      e.preventDefault();
      this.#release();
    });
    this.#el.addEventListener('touchstart', e => {
      e.preventDefault();
      this.#press();
    });
    this.#el.addEventListener('touchend', e => {
      e.preventDefault();
      this.#release();
    });
  }
  #press() {
    if (!this.#isPressed && !board.isPlayingAnimation) {
      this.#isPressed = true;
      this.#el.style.transform = 'translateY(7px)';
      this.#el.style.boxShadow = `0px 5px ${this.#shadowColor}`;
      if (!game.isOver && !board.isPlayingAnimation) {
        this.#setPressedColor();
        this.#playSound();
      }
    }
  }
  #release() {
    if (this.#isPressed) {
      this.#isPressed = false;
      this.#el.style.transform = 'initial';
      this.#el.style.boxShadow = `0px 12px ${this.#shadowColor}`;
      if (!game.isOver && !board.isPlayingAnimation) {
        this.#setNormalColor();
        this.#stopSound();
        game.getAnswer(this.#id);
      }
    }
  }
  play(duration) {
    this.#setPressedColor();
    this.#playSound();
    setTimeout(() => {
      this.#setNormalColor();
      this.#stopSound();
    }, duration * 2 / 3);
  }
  #setPressedColor() {
    this.#el.style.backgroundImage =
      `radial-gradient(120px, ${this.#lightColor}, ${this.#color})`;
  }
  #setNormalColor() {
    this.#el.style.backgroundImage =
      `radial-gradient(160px at 200px 10px, ${this.#lightColor}, ${this.#color})`;
  }
  #playSound() {
    this.#stopSound = playSound(this.#pitch);
  }
  get id() {
    return this.#id;
  }
}
