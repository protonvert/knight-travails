// --------------------------------- Functions -------------------------------------------------------
const Node = (pos, path) => {
  // create a node class that has a position and a path paramater
  if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) {
    return null
  }
  return { pos, path }
}

const knightMoves = ([x, y], [a, b]) => {
  // a queue is a first in first out data structure
  const queue = [Node([x, y], [[x, y]])]

  let currentNode = queue.shift()

  while (currentNode.pos[0] !== a || currentNode.pos[1] !== b) {
    const moves = [
      [currentNode.pos[0] + 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] + 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] - 1],
      [currentNode.pos[0] - 2, currentNode.pos[1] + 1],
      [currentNode.pos[0] + 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] + 1, currentNode.pos[1] + 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] - 2],
      [currentNode.pos[0] - 1, currentNode.pos[1] + 2]
    ]
    moves.forEach((move) => {
      const node = Node(move, currentNode.path.concat([move]))
      if (node) {
        queue.push(node)
      }
    })
    currentNode = queue.shift()
  }
  console.log(
    `=> You made it in ${currentNode.path.length - 1} moves!  Here's your path:`
  )
  currentNode.path.forEach((pos) => {
    console.log(pos)
  })
}

knightMoves([3, 7], [0, 0])
