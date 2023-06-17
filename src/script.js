// const Gameboard = require('./gameboard')
const Knight = require('./knight')

// const board = Gameboard()
const knight = Knight()

knight.position = [5, 5]
knight.position = [5, 7]
knight.position = [7, 6]
// console.log(knight.getPossibleMoves())
knight.knightMoves([4, 3])
