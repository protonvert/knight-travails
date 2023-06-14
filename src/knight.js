const knight = () => {
  // --------------------------------- Functions -------------------------------------------------------
  const isMoveValid = (xCord, yCord) => {
    const coords = [xCord, yCord]
    // if the xcord and ycord are between 0-7, and the coords are not in the position history, return true
    if (
      xCord >= 0 &&
      xCord <= 7 &&
      yCord >= 0 &&
      yCord <= 7 &&
      !positionHistory.includes(coords)
    ) {
      return true
    }
    // if conditions not met, return false
    return false
  }

  const getPossibleMoves = () => {
    // map and filter all possible moves using the offset, filter with the isMoveValid method
    const currentPos = position
    const possibleMoves = []

    offsets.forEach((offset) => {
      const [xCoordOffset, yCoordOffset] = offset // set the offset coordinates to the current array of offset
      const [xCoordCurrentPos, yCoordCurrentPos] = currentPos // from current position, deconstruct the xCoordinate and yCoordiate

      const total = [
        xCoordOffset + xCoordCurrentPos,
        yCoordOffset + yCoordCurrentPos
      ]

      if (isMoveValid(total[0], total[1])) {
        // console.log(`true: ${total[0]}, ${total[1]}`)
        possibleMoves.push(total)
      }
    })
    // console.log(possibleMoves)
    return possibleMoves
  }

  const knightMoves = (endPos, counter = 0, currentPos = position) => {
    // base case
    if (currentPos === endPos) return

    // recursively create binary tree of all possible moves for position
    const movesAvailable = getPossibleMoves(currentPos)

    // for each move available, do a recursive call of function on it
  }
  // --------------------------------- Variables -------------------------------------------------------
  let position

  const positionHistory = []

  const offsets = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-2, -1]
  ]

  return {
    set position (pos) {
      if (pos[0] > 7 || pos[0] < 0 || pos[1] > 7 || pos[1] < 0) {
        throw new Error('position not within board bounds')
      }
      position = pos
      positionHistory.push(pos) // add this position to the history
    },
    get position () {
      return position
    },
    knightMoves,
    getPossibleMoves
  }
}

module.exports = knight
