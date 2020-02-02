/**
 * Represents a section of the snake.
 */
class SnakeTile {
  constructor(xPos, yPos, isHead = false) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.isHead = isHead;
    this.direction = null;
  }
}

export default SnakeTile;
