import { playSound } from './audio.js';

export default class Button {
  #el;
  #isPressed = false;
  #pitch;
  #onClassName;
  #pressedClassName;
  #stopSound;

  constructor(id, name, pitch) {
    // Properties
    this.#el = document.getElementById(id);
    this.#pitch = pitch;
    this.#onClassName = `btn-${name}-on`;
    this.#pressedClassName = `btn-${name}-pressed`;

    // Events
    this.#el.addEventListener('pointerdown', this.#pressedHandler.bind(this));
    this.#el.addEventListener('pointerup', this.#releasedHandler.bind(this));

    this.#el.addEventListener('pointerleave', event => {
      if (this.#isPressed) {
        this.#releasedHandler(event);
        console.log('> Input Canceled');
      }
    });
  }

  #playSound() {
    this.#stopSound = playSound(this.#pitch);
  }

  on() {
    this.#el.classList.add(this.#onClassName);
    this.#playSound();
  }

  off() {
    this.#el.classList.remove(this.#onClassName);
    this.#stopSound();
  }

  #pressedHandler(event) {
    event.preventDefault();
    this.#isPressed = true;
    this.on();
    event.target.classList.add(this.#pressedClassName);
  }

  #releasedHandler(event) {
    event.preventDefault();
    this.#isPressed = false;
    this.off();
    event.target.classList.remove(this.#pressedClassName);
  }
}
