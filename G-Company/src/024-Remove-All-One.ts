// https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips/

// Time: O(r) | Space: O(r) where r is the lenght of row
const removeOnes = (grid: number[][]): boolean => {
  const firstRow = grid[0]
  const firstRowFlipped = grid[0].map((element) => 1 - element)

  for (let i = 1; i < grid.length; i++) {
    if (`${grid[i]}` === `${firstRow}` || `${grid[i]}` === `${firstRowFlipped}`)
      continue
    return false
  }

  return true
}

console.log(
  removeOnes([
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
  ])
)
