const gameboard = () => {
  // --------------------------------- Functions -------------------------------------------------------
  // generate boardCoordinates array
  const generateBoard = () => {
    const boardArrays = []
    for (let i = 0; i < 8; i++) {
      const tempArray = []
      for (let j = 0; j < 8; j++) {
        tempArray.push(j)
      }
      boardArrays.push(tempArray)
    }
    return boardArrays
  }

  const printBoard = () => {
    console.log('board')
  }

  // --------------------------------- Variables -------------------------------------------------------
  // array or map of squares
  const boardCoordinates = generateBoard()

  return { generateBoard, printBoard }
}

module.exports = gameboard
