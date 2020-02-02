import Game from "./Game/Game.js";

window.addEventListener('load', function () {
  const canvas = document.querySelector("#gameCanvas")
  let g = new Game(canvas, 20, 20);
  g.start();

  // Move the snake if wasd are pressed
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "KeyW":
        g.snake.changeDirection("up");
        break;
      case "KeyS":
        g.snake.changeDirection("down");
        break;
      case "KeyA":
        g.snake.changeDirection("left");
        break;
      case "KeyD":
        g.snake.changeDirection("right");
        break;
    }
  });
});
