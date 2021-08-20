import { board } from './index.js';
import { audioCtx } from './audio.js';

export default class Game {
  constructor() {
    this._isOver = true;
    this._sequence = [];
    this._answer = [];
    this._score = 0;
  }
  getAnswer(btnId) {
    if (!this._isOver && !this._isPlayingAnimation) {
      this._answer.push(btnId);
      const i = this._answer.length - 1;
      if (this._answer[i] !== this._sequence[i]) {
        this._isOver = true;
        board.loseAnimation();
        return;
      }
      if (this._answer.length === this._sequence.length) {
        this._newRound();
      }
    }
  }
  _newRound() {
    this._updateScore();
    this._sequence.push(Math.floor(Math.random() * 4));
    board.playSequence(this._sequence.slice(), 500);
    this._answer = [];
  }
  newGame() {
    this._isOver = false;
    this._sequence = [];
    this._answer = [];
    this._score = 0;
    this._newRound();
    audioCtx.resume();
  }
  get isOver() {
    return this._isOver;
  }
  _updateScore() {
    document.getElementById('score').textContent = this._score.toString().padStart(2, '0');
    this._score++;
  }
}
