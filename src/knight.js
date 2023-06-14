const knight = () => {
  // --------------------------------- Functions -------------------------------------------------------
  const getPosition = () => {
    return position
  }

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
  }

  const knightMoves = () => {
    console.log('moves')
  }
  // --------------------------------- Variables -------------------------------------------------------
  let position

  const positionHistory = []

  const allowedOffsets = [
    [1, 2],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [-2, 1],
    [-2, -1]
  ]

  return { getPosition, knightMoves }
}

module.exports = knight
