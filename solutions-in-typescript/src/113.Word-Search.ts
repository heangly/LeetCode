// Time:  O (n * m * 4^k) where K is the length of word)
// Space: O(K)
function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && helper(i, j, 0, word, board)) {
        return true
      }
    }
  }

  return false
}

const helper = (i: number, j: number, wordIndex: number, word: string, board: string[][]): boolean => {
  if (wordIndex >= word.length) return true

  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length) return false
  if (board[i][j] !== word[wordIndex]) return false

  const temp = board[i][j]
  board[i][j] = '#' //mark as visited

  const left = helper(i, j - 1, wordIndex + 1, word, board)
  const right = helper(i, j + 1, wordIndex + 1, word, board)
  const top = helper(i - 1, j, wordIndex + 1, word, board)
  const bottom = helper(i + 1, j, wordIndex + 1, word, board)

  board[i][j] = temp

  return left || right || top || bottom
}
