/**
 * Represents an apple.
 */
class Apple {
  /**
   * Creates an apple at a random point on the grid.
   * @param {*} noOfXTiles 
   * @param {*} noOfYTiles 
   */
  constructor(noOfXTiles, noOfYTiles) {
    this.noOfXTiles = noOfXTiles;
    this.noOfYTiles = noOfYTiles;
    this.xCoor = Math.round(Math.random() * (noOfXTiles - 1));
    this.yCoor = Math.round(Math.random() * (noOfYTiles - 1));
  }

  /**
   * Determines if a given snake has caught the apple.
   * @param {*} snake 
   */
  isCaught(snake) {
    let self = this;
    return (
      snake.tiles[0].xPos === self.xCoor &&
      snake.tiles[0].yPos === self.yCoor
    )
  }
}

export default Apple;
