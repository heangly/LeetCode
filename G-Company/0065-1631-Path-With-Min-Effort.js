var minimumEffortPath = function (heights) {
  const m = heights.length,
    n = heights[0].length
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  let l = 0,
    r = Math.pow(10, 6)

  while (l < r) {
    let mid = l + ((r - l) >> 1)
    let t = bfs(mid)
    if (t) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l

  function bfs(val) {
    const queue = [[0, 0]]
    const visited = new Set([0, 0])

    while (queue.length) {
      let [x, y] = queue.shift()
      if (x === m - 1 && y === n - 1) return true
      for (let dir of dirs) {
        let nx = dir[0] + x
        let ny = dir[1] + y
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= m ||
          ny >= n ||
          visited.has(nx + ' ' + ny)
        )
          continue
        if (Math.abs(heights[nx][ny] - heights[x][y]) > val) continue
        visited.add(nx + ' ' + ny)
        queue.push([nx, ny])
      }
    }

    return false
  }
}
