const isValidSudoku = (board: string[][]): boolean => {
  const seen = new Set<string>()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j]
      if (cell === '.') continue
      const row = `row ${i} ${cell}`
      const col = `col ${j} ${cell}`
      const subBox = `subBox ${Math.floor(i / 3)} ${Math.floor(j / 3)} ${cell}`

      if (!seen.has(row) && !seen.has(col) && !seen.has(subBox)) {
        seen.add(row)
        seen.add(col)
        seen.add(subBox)
      } else {
        return false
      }
    }
  }
  return true
}
