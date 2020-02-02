import Game from "./Game/Game.js";

window.addEventListener('load', function () {
  const canvas = document.querySelector("#gameCanvas")
  let g = new Game(canvas, 20, 20);
  g.renderSnake();
  g.keyboardController();
});
