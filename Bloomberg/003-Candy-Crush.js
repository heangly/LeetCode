// https://leetcode.com/problems/candy-crush/

/**
 * @param {number[][]} board
 * @return {number[][]}
 */

const candyCrush = (board) => {
  if (!board) return
  let isDone = true

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length - 2; col++) {
      let num1 = Math.abs(board[row][col])
      let num2 = Math.abs(board[row][col + 1])
      let num3 = Math.abs(board[row][col + 2])

      if (num1 !== 0 && num1 === num2 && num2 === num3) {
        board[row][col] = -num1
        board[row][col + 1] = -num1
        board[row][col + 2] = -num1
        isDone = false
      }
    }
  }

  for (let c = 0; c < board[0].length; c++) {
    for (let r = 0; r < board.length - 2; r++) {
      let num1 = Math.abs(board[r][c])
      let num2 = Math.abs(board[r + 1][c])
      let num3 = Math.abs(board[r + 2][c])

      if (num1 !== 0 && num1 === num2 && num2 === num3) {
        board[r][c] = -num1
        board[r + 1][c] = -num1
        board[r + 2][c] = -num1
        isDone = false
      }
    }
  }

  if (!isDone) {
    for (let c = 0; c < board[0].length; c++) {
      let idx = board.length - 1
      for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][c] > 0) {
          board[idx][c] = board[r][c]
          idx--
        }
      }
      for (let r = idx; r >= 0; r--) {
        board[r][c] = 0
      }
    }
  }

  if (isDone) return board

  return candyCrush(board)
}

const board = [
  [110, 5, 112, 113, 114],
  [210, 211, 5, 213, 214],
  [310, 311, 3, 313, 314],
  [410, 411, 412, 5, 414],
  [5, 1, 512, 3, 3],
  [610, 4, 1, 613, 614],
  [710, 1, 2, 713, 714],
  [810, 1, 2, 1, 1],
  [1, 1, 2, 2, 2],
  [4, 1, 4, 4, 1014]
]

console.log(candyCrush(board))
