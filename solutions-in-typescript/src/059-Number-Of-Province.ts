function findCircleNum2(isConnected: number[][]): number {
  const visited: Record<string, boolean> = {}
  let output = 0

  const dfs = (i: number) => {
    visited[i] = true

    for (let col = 0; col < isConnected[i].length; col++) {
      if (isConnected[i][col] === 1 && !visited[col]) {
        dfs(col)
      }
    }
  }

  for (let i = 0; i < isConnected.length; i++) {
    if (!visited[i]) {
      dfs(i)
      output++
    }
  }

  return output
}

console.log(
  findCircleNum2([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
)

const a = []
