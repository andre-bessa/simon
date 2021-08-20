export default class Board {
  constructor(g, r, y, b) {
    this._greenBtn = g;
    this._redBtn = r;
    this._yellowBtn = y;
    this._blueBtn = b;
    this._isPlayingAnimation = false;

    this._idToButton = new Map();
    this._idToButton.set(this._greenBtn.id, this._greenBtn);
    this._idToButton.set(this._redBtn.id, this._redBtn);
    this._idToButton.set(this._yellowBtn.id, this._yellowBtn);
    this._idToButton.set(this._blueBtn.id, this._blueBtn);
  }
  playSequence(seq, interval) {
    this._isPlayingAnimation = true;
    const interavlId = setInterval(() => {
      if (seq.length === 0) {
        this._isPlayingAnimation = false;
        clearInterval(interavlId);
      } else {
        this._idToButton.get(seq.shift()).play(interval);
      }
    }, interval);
  }
  loseAnimation() {
    this._playAllButtons(200);
    setTimeout(() => {
      this._playAllButtons(800);
    }, 400);
  }
  _playAllButtons(duration=300) {
    this._isPlayingAnimation = true;
    this._greenBtn.play(duration);
    this._redBtn.play(duration);
    this._yellowBtn.play(duration);
    this._blueBtn.play(duration);
    setTimeout( () => {
      this._isPlayingAnimation = false;
    }, duration);
  }
  get isPlayingAnimation() {
    return this._isPlayingAnimation;
  }
}
