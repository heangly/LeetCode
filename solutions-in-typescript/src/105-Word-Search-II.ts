class TrieNode3 {
  children: Record<string, TrieNode3> = {}
  word: string | null = null // Stores the full word at leaf nodes
}

function buildTrie(words: string[]): TrieNode3 {
  const root = new TrieNode3()
  for (const word of words) {
    let node = root
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode3()
      }
      node = node.children[char]
    }
    node.word = word // Mark the end of the word
  }
  return root
}

function findWords(board: string[][], words: string[]): string[] {
  const root = buildTrie(words)
  const result: string[] = []

  const dfs = (i: number, j: number, node: TrieNode3) => {
    // Out of bounds or visited cell
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] === '#') {
      return
    }

    const char = board[i][j]
    const nextNode = node.children[char]

    // If no matching prefix, stop exploring
    if (!nextNode) return

    // Check if we found a word
    if (nextNode.word) {
      result.push(nextNode.word)
      nextNode.word = null // Avoid duplicate results
    }

    // Mark the cell as visited
    board[i][j] = '#'

    // Explore neighbors
    dfs(i + 1, j, nextNode) // Down
    dfs(i - 1, j, nextNode) // Up
    dfs(i, j + 1, nextNode) // Right
    dfs(i, j - 1, nextNode) // Left

    // Restore the cell
    board[i][j] = char
  }

  // Start DFS from every cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, root)
    }
  }

  return result
}
