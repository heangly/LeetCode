// Time: O(n * m) | Space: O(1)
const maximumWealth = (accounts: number[][]): number => {
  let max = -Infinity

  for (const row of accounts) {
    let sum = 0
    for (const col of row) {
      sum += col
    }
    max = Math.max(sum, max)
  }

  return max
}

console.log('====================================')
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5]
  ])
)
console.log('====================================')

export {}
