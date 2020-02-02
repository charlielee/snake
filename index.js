import Game from "./Game/Game.js";

window.addEventListener('load', function () {
  const canvas = document.querySelector("#gameCanvas")
  let g = new Game(canvas, 20, 20);
  g.start();

  // Move the snake if wasd are pressed
  document.addEventListener('keydown', (e) => {
    console.log(e);
    switch (e.code) {
      case "KeyW":
        g.move("up");
        break;
      case "KeyS":
        g.move("down");
        break;
      case "KeyA":
        g.move("left");
        break;
      case "KeyD":
        g.move("right");
        break;
    }
  });
});
