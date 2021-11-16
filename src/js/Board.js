export default class Board {
  #greenBtn;
  #redBtn;
  #yellowBtn;
  #blueBtn;
  #isPlayingAnimation = false;
  #idToButton = new Map();

  constructor(g, r, y, b) {
    this.#greenBtn = g;
    this.#redBtn = r;
    this.#yellowBtn = y;
    this.#blueBtn = b;

    this.#idToButton.set(this.#greenBtn.id, this.#greenBtn);
    this.#idToButton.set(this.#redBtn.id, this.#redBtn);
    this.#idToButton.set(this.#yellowBtn.id, this.#yellowBtn);
    this.#idToButton.set(this.#blueBtn.id, this.#blueBtn);
  }
  playSequence(seq, interval) {
    this.#isPlayingAnimation = true;
    const interavlId = setInterval(() => {
      if (seq.length === 0) {
        this.#isPlayingAnimation = false;
        clearInterval(interavlId);
      } else {
        this.#idToButton.get(seq.shift()).play(interval);
      }
    }, interval);
  }
  loseAnimation() {
    this.#playAllButtons(200);
    setTimeout(() => {
      this.#playAllButtons(800);
    }, 400);
  }
  #playAllButtons(duration=300) {
    this.#isPlayingAnimation = true;
    this.#greenBtn.play(duration);
    this.#redBtn.play(duration);
    this.#yellowBtn.play(duration);
    this.#blueBtn.play(duration);
    setTimeout( () => {
      this.#isPlayingAnimation = false;
    }, duration);
  }
  get isPlayingAnimation() {
    return this.#isPlayingAnimation;
  }
}
