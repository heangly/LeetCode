const findCircleNum = (isConnected: number[][]): number => {
  let circles = 0
  const visited = new Map<number, boolean>()

  const dfs = (i: number): void => {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1 && !visited.has(j)) {
        visited.set(j, true)
        dfs(j)
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited.has(i)) {
      circles++
      dfs(i)
    }
  }

  return circles
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
)
