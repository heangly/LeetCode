// Time: O(rc) | Space: O(rc)
const shortestPath = (grid: number[][], k: number): number => {
  const maxRow = grid.length
  const maxCol = grid[0].length

  const visited = new Set()
  const q = [{ r: 0, c: 0, step: 0, obstacle: 0 }]

  while (q.length) {
    const curr = q.shift()!
    const info = `${curr.r}-${curr.c}-${curr.obstacle}`

    if (curr.r < 0 || curr.r >= maxRow || curr.c < 0 || curr.c >= maxCol)
      continue

    if (curr.obstacle > k || visited.has(info)) continue

    if (grid[curr.r][curr.c] === 1) {
      curr.obstacle++
    }

    if (curr.r === maxRow - 1 && curr.c === maxCol - 1) {
      return curr.step
    }

    visited.add(info)

    q.push({
      r: curr.r + 1,
      c: curr.c,
      step: curr.step + 1,
      obstacle: curr.obstacle
    })
    q.push({
      r: curr.r - 1,
      c: curr.c,
      step: curr.step + 1,
      obstacle: curr.obstacle
    })
    q.push({
      r: curr.r,
      c: curr.c + 1,
      step: curr.step + 1,
      obstacle: curr.obstacle
    })
    q.push({
      r: curr.r,
      c: curr.c - 1,
      step: curr.step + 1,
      obstacle: curr.obstacle
    })
  }

  return -1
}

// console.log(
//   shortestPath(
//     [
//       [0, 0, 0],
//       [1, 1, 0],
//       [0, 0, 0],
//       [0, 1, 1],
//       [0, 0, 0]
//     ],
//     1
//   )
// )

// console.log('----------=====--------')
// console.log(
//   shortestPath(
//     [
//       [0, 1, 1],
//       [1, 1, 1],
//       [1, 0, 0]
//     ],
//     1
//   )
// )

console.log(
  shortestPath(
    [
      [0, 1, 0, 1],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 0, 0]
    ],
    18
  )
)
