import Game from "./Game/Game.js";

window.addEventListener('load', function () {
  const canvas = document.querySelector("#gameCanvas")
  let g = new Game(canvas, 20, 20);
  g.renderSnake();

  // Move the snake if wasd are pressed
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "KeyW":
      case "ArrowUp":
        g.snake.changeDirection("up");
        if (!g.isPlaying) g.start();
        break;
      case "KeyS":
      case "ArrowDown":
        g.snake.changeDirection("down");
        if (!g.isPlaying) g.start();
        break;
      case "KeyA":
      case "ArrowLeft":
        g.snake.changeDirection("left");
        if (!g.isPlaying) g.start();
        break;
      case "KeyD":
      case "ArrowRight":
        g.snake.changeDirection("right");
        if (!g.isPlaying) g.start();
        break;
    }
  });
});
