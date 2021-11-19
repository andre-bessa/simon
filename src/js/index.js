import Button from './Button.js';
import Board from './Board.js';
import Game from './Game.js';
import { initAudio } from './audio.js';

export const board = new Board(
  new Button(0, 'green', 440),
  new Button(1, 'red', 329.628),
  new Button(2, 'yellow', 261.626),
  new Button(3, 'blue', 220)
);

export const game = new Game();
document.getElementById('new-game-btn').addEventListener('click', () => {
  initAudio();
  if (!board.isPlayingAnimation) {
    game.newGame.call(game);
  }
});
