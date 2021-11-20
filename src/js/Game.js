import Board from './Board.js';

export default class Game {
  #board = new Board();
  #sequence = [];
  #currentSequenceIndex = 0;
  #isOver = true;
  #score = 0;
  #scoreElement = document.getElementById('score');
  #speed = 400;

  constructor() {
    const boardElement = document.getElementById('board');

    const ignoreUserInputHandler = event => {
      if (this.#isOver || this.#board.isPlayingAnimation) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    boardElement.addEventListener('pointerdown', ignoreUserInputHandler, true);
    boardElement.addEventListener('pointerleave', ignoreUserInputHandler, true);
    boardElement.addEventListener('pointerup', ignoreUserInputHandler, true);

    boardElement.addEventListener('pointerup', this.#answerHandler.bind(this));
  }

  #answerHandler(event) {
    const id = parseInt(event.target.id);
    if (this.#isValidId(id)) {
      event.preventDefault();
      if (this.#isRightAnswer(id)) {
        if (this.#currentSequenceIndex >= this.#sequence.length)
          this.#newRound();
      } else {
        this.#gameOver();
      }
    }
  }

  #isValidId(btnId) {
    return 0 <= btnId && btnId <= 3;
  }

  #isRightAnswer(btnId) {
    return this.#sequence[this.#currentSequenceIndex++] === btnId;
  }

  #gameOver() {
    this.#isOver = true;
    this.#board.loseAnimation(this.#speed);
  }

  #newRound() {
    this.#currentSequenceIndex = 0;
    this.#updateScore();
    this.#sequence.push(randomInt(0, 4));
    this.#board.playSequence([...this.#sequence], this.#speed);
  }

  newGame() {
    if (!this.#board.isPlayingAnimation) {
      this.#isOver = false;
      this.#sequence = [];
      this.#score = 0;
      this.#newRound();
    }
  }

  #updateScore() {
    this.#scoreElement.textContent = this.#score.toString().padStart(2, '0');
    this.#score++;
  }
}

/**
 * Generates a random integer.
 * @param {number} min - Minimum integer (inclusive)
 * @param {number} max - Maximum integer (exclusive)
 * @returns {number} A random integer between min e max
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
