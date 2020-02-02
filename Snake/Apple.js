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
}

export default Apple;
