// https://leetcode.com/problems/pascals-triangle-ii/

const getRow = (rowIndex: number): number[] => {
  const helper = (dp: number[][]): number[] => {
    if (dp.length - 1 === rowIndex) {
      return dp.pop()!
    }

    const prev = dp[dp.length - 1]
    const newArr = [1]

    for (let i = 1; i < prev.length; i++) {
      newArr.push(prev[i - 1] + prev[i])
    }
    newArr.push(1)
    dp.push(newArr)
    return helper(dp)
  }

  return helper([[1], [1, 1]])
}

console.log(getRow(3))
