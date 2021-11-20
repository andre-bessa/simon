import { initAudio } from './audio.js';
import Game from './Game.js';

const game = new Game();

document.getElementById('new-game-btn').addEventListener('click', () => {
  initAudio();
  game.newGame();
});
