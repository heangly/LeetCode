var maxPoints = function (points) {
  const dp = [...points]

  for (let row = 1; row < points.length; row++) {
    getMax(row, dp)
  }

  return Math.max(...dp.pop())
}

const getMax = (row, dp) => {
  for (let currCol = 0; currCol < dp[row].length; currCol++) {
    let max = -Infinity

    for (let preCol = 0; preCol < dp[row - 1].length; preCol++) {
      const distance = Math.abs(currCol - preCol)
      let val = dp[row][currCol] + dp[row - 1][preCol] - distance
      max = Math.max(max, val)
    }

    dp[row][currCol] = max
  }
}
