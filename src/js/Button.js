import { playSound } from './audio.js';
import { board } from './index.js';
import { game } from './index.js';

export default class Button {
  #id;
  #name;
  #el;
  #pitch;
  #stopSound;
  #isPressed = false;

  constructor(id, name, pitch) {
    // Properties
    this.#id = id;
    this.#name = name;
    this.#el = document.getElementById(id);
    this.#pitch = pitch;

    // Events
    this.#el.addEventListener('mousedown', e => {
      e.preventDefault();
      this.#press();
    });

    this.#el.addEventListener('mouseleave', e => {
      e.preventDefault();
      if (this.#isPressed) {
        this.#isPressed = false;
        this.#el.classList.remove(`btn-${this.#name}-pressed`);
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
      this.#el.classList.add(`btn-${this.#name}-pressed`);
      if (!game.isOver && !board.isPlayingAnimation) {
        this.#setPressedColor();
        this.#playSound();
      }
    }
  }

  #release() {
    if (this.#isPressed) {
      this.#isPressed = false;
      this.#el.classList.remove(`btn-${this.#name}-pressed`);
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
    this.#el.classList.add(`btn-${this.#name}-on`);
  }

  #setNormalColor() {
    this.#el.classList.remove(`btn-${this.#name}-on`);
  }

  #playSound() {
    this.#stopSound = playSound(this.#pitch);
  }

  get id() {
    return this.#id;
  }
}
