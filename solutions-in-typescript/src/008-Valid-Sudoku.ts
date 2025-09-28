// Time: O(nm) | Space: O(nm)
function isValidSudoku(board: string[][]): boolean {
  const mySet = new Set()

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const val = board[row][col]

      if (val === '.') continue

      const rowKey = `r:${row}-v:${val}`
      const colKey = `c:${col}-v:${val}`
      const boxKey = `b:${Math.floor(row / 3)}-${Math.floor(col / 3)}}-v:${val}`

      if (mySet.has(rowKey) || mySet.has(colKey) || mySet.has(boxKey)) return false

      mySet.add(rowKey)
      mySet.add(colKey)
      mySet.add(boxKey)
    }
  }

  return true
}
