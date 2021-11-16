import Button from './Button.js';
import Board from './Board.js';
import Game from './Game.js';
import { initAudio } from './audio.js';

const green        = 'hsl(150, 100%, 45%)',
      lightGreen   = 'hsl(150, 100%, 85%)',
      shadowGreen  = 'hsl(150,  90%, 35%)',
      red          = 'hsl(  0, 100%, 45%)',
      lightRed     = 'hsl(  0, 100%, 85%)',
      shadowRed    = 'hsl(  0,  90%, 35%)',
      yellow       = 'hsl( 60, 100%, 45%)',
      lightYellow  = 'hsl( 60, 100%, 85%)',
      shadowYellow = 'hsl( 60,  90%, 35%)',
      blue         = 'hsl(225,  55%, 45%)',
      lightBlue    = 'hsl(225,  55%, 85%)',
      shadowBlue   = 'hsl(225,  45%, 35%)';

export const board = new Board(
  new Button(0, green, lightGreen, shadowGreen, 440),
  new Button(1, red, lightRed, shadowRed, 329.628),
  new Button(2, yellow, lightYellow, shadowYellow, 261.626),
  new Button(3, blue, lightBlue, shadowBlue, 220)
);

export const game = new Game();
document.getElementById('new-game-btn').addEventListener('click', () => {
  initAudio();
  if (!board.isPlayingAnimation) {
    game.newGame.call(game);
  }
});
