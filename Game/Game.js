import Snake from "../Snake/Snake.js"

class Game {
  constructor(canvas, xTiles, yTiles) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");

    // Set up the grid
    this.tileWidth = canvas.width / xTiles;
    this.tileHeight = canvas.height / yTiles;

    // Game state
    this.snake = new Snake(xTiles, yTiles);
    this.isPlaying = false;
  }

  /**
   * Begins the game
   */
  start() {
    this.isPlaying = true;
    requestAnimationFrame(() => { this.mainLoop() });
  }

  mainLoop() {
    let self = this;
    setTimeout(function() {
      requestAnimationFrame(() => { self.mainLoop() });
      self.move();
    }, 200);
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
