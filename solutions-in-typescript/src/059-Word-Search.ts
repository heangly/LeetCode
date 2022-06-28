// Time: O(n * m) | Space: O(n * m)
const exist = (board: string[][], word: string): boolean => {
  const dfs = (row: number, col: number, idx: number): boolean => {
    if (idx === word.length) return true

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[row].length ||
      board[row][col] !== word[idx]
    ) {
      return false
    }

    const currentChar = board[row][col]
    board[row][col] = 'VISITED'

    const res =
      dfs(row, col + 1, idx + 1) ||
      dfs(row, col - 1, idx + 1) ||
      dfs(row + 1, col, idx + 1) ||
      dfs(row - 1, col, idx + 1)

    board[row][col] = currentChar

    return res
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {
        const res = dfs(i, j, 0)
        if (res === true) return true
      }
    }
  }

  return false
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]
const word = 'ABCCED'

const board2 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'E', 'S'],
  ['A', 'D', 'E', 'E']
]

const word2 = 'ABCESEEEFS'

console.log(exist(board2, word2))
export {}
