class TrieNode {
  children: Record<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

// Used for autocomplete, spellchecker, prefix character
// Time: O(N * L) where N is the total number of words in the trie, and L is the average length of word
class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let node = this.root

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }

      node = node.children[char]
    }

    node.isEnd = true
  }

  search(word: string): boolean {
    let node = this.root

    for (const char of word) {
      if (!node.children[char]) return false

      node = node.children[char]
    }

    return node.isEnd
  }

  startsWith(prefix: string): boolean {
    let node = this.root

    for (const char of prefix) {
      if (!node.children[char]) return false

      node = node.children[char]
    }

    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
