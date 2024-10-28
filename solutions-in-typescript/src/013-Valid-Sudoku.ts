/**
 * Rules:
 * - Each row must contain the digits 1-9 without repetition.
 * - Each column must contain the digits 1-9 without repetition.
 * - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 */

// Time: O(n * m) || O(9^2) | space: O(N)
function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j]
      if (val === '.') continue
      const row = `row ${i} ${val}`
      const col = `col ${j} ${val}`
      const subBox = `subBox ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${val}`
      if (seen.has(row) || seen.has(col) || seen.has(subBox)) return false
      seen.add(row)
      seen.add(col)
      seen.add(subBox)
    }
  }

  return true
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ])
)
