class TrieNode2 {
  children: Record<string, TrieNode2>
  isEnd: boolean

  constructor() {
    this.children = {}
    this.isEnd = false
  }
}

class Trie2 {
  root: TrieNode2

  constructor() {
    this.root = new TrieNode2()
  }

  insert(word: string) {
    let curr = this.root

    for (const char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode2()
      }
      curr = curr.children[char]
    }

    curr.isEnd = true
  }

  search(word: string) {
    let curr = this.root

    for (const char of word) {
      if (!(char in curr.children)) {
        return false
      }
      curr = curr.children[char]
    }

    return curr.isEnd
  }

  startsWith(prefix: string) {
    let curr = this.root
    for (const char of prefix) {
      if (!(char in curr.children)) {
        return false
      }
      curr = curr.children[char]
    }
    return true
  }
}
