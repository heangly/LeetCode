const isRobotBounded = (instructions: string): boolean => {
  // up, left, down, right this
  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0]
  ]

  let i = 0
  let x = 0
  let y = 0

  for (const dir of instructions) {
    if (dir === 'L') {
      i = (i + 1) % 4
    } else if (dir === 'R') {
      i = (i + 3) % 4
    } else {
      x += directions[i][0]
      y += directions[i][1]
    }
  }

  return (x === 0 && y === 0) || i !== 0
}

export {}
