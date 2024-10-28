class Robot {
  // Returns true if the cell in front is open and robot moves into the cell.
  // Returns false if the cell in front is blocked and robot stays in the current cell.
  move(): boolean {
    return true
  }

  // Robot will stay in the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  turnRight() {}

  // Robot will stay in the same cell after calling turnLeft/turnRight.
  // Each turn will be 90 degrees.
  turnLeft() {}

  // Clean the current cell.
  clean() {}
}

function cleanRoom(robot: Robot) {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]

  const visited = new Set<string>()

  const goBack = () => {
    robot.turnRight()
    robot.turnRight()
    robot.move()
    robot.turnRight()
    robot.turnRight()
  }

  const backtrack = (cell = [0, 0], prev = 0) => {
    visited.add(cell.join())
    robot.clean()

    for (let i = 0; i < 4; i++) {
      const newDirection = (prev + i) % 4
      const newCell = [
        cell[0] + directions[newDirection][0],
        cell[1] + directions[newDirection][1]
      ]

      if (!visited.has(newCell.join()) && robot.move()) {
        backtrack(newCell, newDirection)
        goBack()
      }

      robot.turnRight()
    }
  }

  backtrack()
}
