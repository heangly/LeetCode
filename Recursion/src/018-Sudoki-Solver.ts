const solveSudoku = (board: string[][]): string[][] => {
  dfs(board, board.length)
  return board
}

const dfs = (board: string[][], n: number) => {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] !== '.') continue

      for (let i = 1; i <= 9; i++) {
        const c = i.toString()
        if (isValid(board, row, col, n, c)) {
          board[row][col] = c

          if (dfs(board, n)) return true
        }
      }

      board[row][col] = '.'
      return false
    }
  }
  return true
}

const isValid = (
  board: string[][],
  row: number,
  col: number,
  n: number,
  c: string
): boolean => {
  const blockRow = Math.floor(row / 3) * 3
  const blockCol = Math.floor(col / 3) * 3

  for (let i = 0; i < n; i++) {
    if (board[row][i] === c || board[i][col] === c) return false
    const currRow = blockRow + Math.floor(i / 3)
    const currCol = blockCol + Math.floor(i % 3)
    if (board[currRow][currCol] === c) return false
  }
  return true
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

console.log(solveSudoku(board))
