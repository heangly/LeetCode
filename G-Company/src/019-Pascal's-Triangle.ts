// https://leetcode.com/problems/pascals-triangle/
// Time: O(n^2) | Space: O(1)
const generate = (numRows: number): number[][] => {
  const ans: number[][] = [[1]]

  for (let i = 1; i < numRows; i++) {
    const temp: number[] = [1]
    for (let j = 1; j < ans[i - 1].length; j++) {
      temp.push(ans[i - 1][j] + ans[i - 1][j - 1])
    }
    temp.push(1)
    ans.push(temp)
  }

  return ans
}

console.log(generate(5))
