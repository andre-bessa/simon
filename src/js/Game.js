import { board } from './index.js';

export default class Game {
  #isOver = true;
  #sequence = [];
  #answer = [];
  #score = 0;
  #isPlayingAnimation = false;

  getAnswer(btnId) {
    if (!this.#isOver && !this.#isPlayingAnimation) {
      this.#answer.push(btnId);
      const i = this.#answer.length - 1;
      if (this.#answer[i] !== this.#sequence[i]) {
        this.#isOver = true;
        board.loseAnimation();
        return;
      }
      if (this.#answer.length === this.#sequence.length) {
        this.#newRound();
      }
    }
  }
  #newRound() {
    this.#updateScore();
    this.#sequence.push(Math.floor(Math.random() * 4));
    board.playSequence(this.#sequence.slice(), 500);
    this.#answer = [];
  }
  newGame() {
    this.#isOver = false;
    this.#sequence = [];
    this.#answer = [];
    this.#score = 0;
    this.#newRound();
  }
  get isOver() {
    return this.#isOver;
  }
  #updateScore() {
    document.getElementById('score').textContent = this.#score.toString().padStart(2, '0');
    this.#score++;
  }
}
