class TrieNode {
  children: Record<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  // Time: O(N)
  insert(word: string) {
    let curr = this.root

    for (const char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode()
      }

      curr = curr.children[char]
    }

    curr.isEnd = true
  }

  // Time: O(N)
  search(word: string) {
    let curr = this.root

    for (const char of word) {
      if (!(char in curr.children)) return false
      curr = curr.children[char]
    }

    return curr.isEnd
  }

  // Time: O(N)
  startsWith(prefix: string) {
    let curr = this.root

    for (const char of prefix) {
      if (!(char in curr.children)) return false
      curr = curr.children[char]
    }

    return true
  }
}
