const getRow = (rowIndex: number): number[] => {
  const dp: number[][] = [[1]]

  for (let i = 1; i <= rowIndex; i++) {
    const temp = [1]
    for (let j = 1; j < i; j++) {
      temp.push(dp[i - 1][j] + dp[i - 1][j - 1])
    }
    temp.push(1)
    dp.push(temp)
  }

  return dp.pop()!
}
