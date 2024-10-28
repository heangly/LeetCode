//https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/
// Time: O(rc) | Space: O(rc)
const shortestPath = (grid: number[][], k: number): number => {
  const q = [{ r: 0, c: 0, step: 0, obs: 0 }]
  const visited = new Set()

  while (q.length > 0) {
    const curr = q.shift()!
    const info = `${curr.r}-${curr.c}-${curr.obs}`

    if (
      curr.r < 0 ||
      curr.r >= grid.length ||
      curr.c < 0 ||
      curr.c >= grid[0].length
    )
      continue
    if (curr.obs > k || visited.has(info)) continue

    if (grid[curr.r][curr.c] === 1) {
      curr.obs++
    }

    if (curr.r === grid.length - 1 && curr.c === grid[0].length - 1)
      return curr.step

    visited.add(info)

    q.push({ r: curr.r + 1, c: curr.c, step: curr.step + 1, obs: curr.obs })
    q.push({ r: curr.r - 1, c: curr.c, step: curr.step + 1, obs: curr.obs })
    q.push({ r: curr.r, c: curr.c + 1, step: curr.step + 1, obs: curr.obs })
    q.push({ r: curr.r, c: curr.c - 1, step: curr.step + 1, obs: curr.obs })
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
