import SnakeTile from "./SnakeTile.js";

class Snake {
  constructor(noOfXTiles, noOfYTiles) {
    this.noOfXTiles = noOfXTiles;
    this.noOfYTiles = noOfYTiles;
    this.tiles = [
      new SnakeTile(3, 5, true),
      new SnakeTile(4, 5),
      new SnakeTile(5, 5),
    ];
    this.curDirection = null;
  }

  addTile() {
    // todo
  }

  /**
   * Update the direction of travel if not the opposite to the current direction.
   */ 
  changeDirection(direction) {
    switch (direction) {
      case "right":
        if (this.curDirection !== "left") this.curDirection = direction;
        break;
      case "left":
        if (this.curDirection !== "right") this.curDirection = direction;
        break;
      case "up":
        if (this.curDirection !== "down") this.curDirection = direction;
        break;
      case "down":
        if (this.curDirection !== "up") this.curDirection = direction;
        break;
    }
  }

  /**
   * Updates the positions of each of the snake's tiles
   */
  move() {
    let xChange = 0;
    let yChange = 0;

    switch(this.curDirection) {
      case "right":
        xChange = 1;
        break;
      case "left":
        xChange = -1;
        break;
      case "up":
        yChange = -1;
        break;
      case "down":
        yChange = 1;
        break;
    }

    let oldPositions = [];

    this.tiles.forEach((tile, index) => {
      // Record the current position of the tile
      oldPositions.push({
        xPos: tile.xPos,
        yPos: tile.yPos,
      })

      // Move the head of the snake in the new direction
      if (tile.isHead) {
        tile.xPos += xChange;
        tile.yPos += yChange;

        // Handle wrap around
        if (tile.xPos >= this.noOfXTiles) {
          tile.xPos = 0;
        }
        if (tile.xPos < 0) {
          tile.xpos = this.noOfXTiles;
        }
        if (tile.yPos >= this.noOfYTiles) {
          this.yPos = 0;
        }
        if (tile.yPos < 0) {
          this.yPos = this.noOfYTiles;
        }
      
      // Otherwise move the tile to the tile before it's previous position
      } else {
        tile.xPos = oldPositions[index - 1].xPos;
        tile.yPos = oldPositions[index - 1].yPos;
      }
    });
  }

  /**
   * Checks if any of the snakes tiles overlap.
   */
  detectCollision() {
    let seenCoordinates = [];

    this.tiles.forEach((tile, index) => {
      seenCoordinates.push(`${tile.xPos},${tile.yPos}`);
    });

    return (seenCoordinates.length === new Set(seenCoordinates).size);
  }
}

export default Snake;
