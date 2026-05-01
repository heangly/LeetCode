// Time: O(9x9) -> O(1)
// Space: O(9x9) -> O(1)
function isValidSudoku(board: string[][]): boolean {
  const seen = new Set<string>()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const val = board[i][j]
      if (val === '.') continue

      const rowKey = `r:${i}-v:${val}`
      const colKey = `c:${j}-v:${val}`
      const gridKey = `r:${Math.floor(i / 3)}-c:${Math.floor(j / 3)}-v:${val}`

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(gridKey)) return false

      seen.add(rowKey)
      seen.add(colKey)
      seen.add(gridKey)
    }
  }
  return true
}
