import Apple from "../Snake/Apple.js"
import Snake from "../Snake/Snake.js"

class Game {
  constructor(canvas, noOfXTiles, noOfYTiles) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    // Set up the grid
    this.noOfXTiles = noOfXTiles;
    this.noOfYTiles = noOfYTiles;
    this.tileWidth = canvas.width / noOfXTiles;
    this.tileHeight = canvas.height / noOfYTiles;

    // Game state
    this.score = 0;
    this.snake = new Snake(noOfXTiles, noOfYTiles);
    this.updateApple();
    this.isPlaying = false;
  }

  /**
   * Begins the game
   */
  start() {
    this.isPlaying = true;
    requestAnimationFrame(() => { this.mainLoop() });
  }

  /**
   * Represents one movement of the snake
   */
  mainLoop() {
    let self = this;
    setTimeout(function() {
      requestAnimationFrame(() => { self.mainLoop() });

      // Move the snake
      self.move();

      // Check if an apple is caught
      if (
        self.snake.tiles[0].xPos === self.apple.xCoor &&
        self.snake.tiles[0].yPos === self.apple.yCoor
      ) {
        self.score++;
        self.updateApple();
      }

    }, 200);
  }

  /**
   * Move the snake if wasd are pressed
   */
  keyboardController() {
    let self = this;

    document.addEventListener('keydown', (e) => {
      let newDirection = null;
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          newDirection = "up";
          break;
        case "KeyS":
        case "ArrowDown":
          newDirection = "down";
          break;
        case "KeyA":
        case "ArrowLeft":
          newDirection = "left";
          break;
        case "KeyD":
        case "ArrowRight":
          newDirection = "right";
          break;
      }

      // Update the snakes direction to change on the next round of the main loop
      self.snake.newDirection = newDirection;

      if (!self.isPlaying) self.start();
    });
  }

  move() {
    this.clearSnake();
    this.snake.move();
    this.renderSnake();
  }

  /**
   * Clears the snake from the grid
   */
  clearSnake() {
    let self = this;
    this.snake.tiles.forEach((tile) => {
      self.fillTile(tile.xPos, tile.yPos, "clear");
    });
  }

  /**
   * Renders the snake on the grid
   */
  renderSnake() {
    let self = this;
    this.snake.tiles.forEach((tile) => {
      self.fillTile(tile.xPos, tile.yPos, "snake");
    });
  }

  /**
   * Renders a new apple on the grid
   */
  updateApple() {
    if (this.apple) {
      this.fillTile(this.apple.xCoor, this.apple.yCoor, "clear");
    }
    this.apple = new Apple(this.noOfXTiles, this.noOfYTiles);
    this.fillTile(this.apple.xCoor, this.apple.yCoor, "apple");
  }

  /**
   * Fills a tile of the grid with black, snake or apple
   * @param {*} xCoor 
   * @param {*} yCoor 
   * @param {*} type 
   */
  fillTile(xCoor, yCoor, type) {
    switch (type) {
      case "clear":
        this.context.fillStyle = "rgb(0, 0, 0)";
        break;
      case "snake":
        this.context.fillStyle = "rgb(0, 255, 0)";
        break;
      case "apple":
        this.context.fillStyle = "rgb(255, 0 , 0)";
        break;
    }
    this.context.fillRect(
      xCoor*this.tileWidth,
      yCoor*this.tileHeight,
      this.tileWidth,
      this.tileHeight
    );
  }
}

export default Game;
