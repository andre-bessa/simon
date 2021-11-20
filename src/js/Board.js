import Button from './Button.js';

export default class Board {
  #buttons = {
    0: new Button(0, 'green', 440),
    1: new Button(1, 'red', 329.628),
    2: new Button(2, 'yellow', 261.626),
    3: new Button(3, 'blue', 220)
  };
  #isPlayingAnimation = false;

  #playButton(btnId, duration) {
    this.#buttons[btnId].on();
    setTimeout(() => this.#buttons[btnId].off(), duration);
  }

  #playAllButtons(duration) {
    this.#isPlayingAnimation = true;
    for (const btnId in this.#buttons) {
      this.#buttons[btnId].on();
    }

    setTimeout(() => {
      for (const btnId in this.#buttons) {
        this.#buttons[btnId].off();
      }
      this.#isPlayingAnimation = false;
    }, duration);
  }

  playSequence(seq, speed) {
    this.#isPlayingAnimation = true;

    const playRecursive = (seq, idx) => {
      if (idx === seq.length) {
        this.#isPlayingAnimation = false;
        return;
      }
      this.#playButton(seq[idx], speed - 100);
      setTimeout(playRecursive, speed, seq, idx + 1);
    };

    setTimeout(playRecursive, speed, seq, 0);
  }

  loseAnimation(speed) {
    this.#playAllButtons(speed / 2);
    setTimeout(() => this.#playAllButtons(speed + 200), speed);
  }

  get isPlayingAnimation() {
    return this.#isPlayingAnimation;
  }
}
