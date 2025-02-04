class TrieNode10 {
  children: (TrieNode10 | null)[]

  constructor() {
    // Each node has up to 10 possible children (digits 0-9)
    this.children = new Array(10).fill(null)
  }
}

class Trie10 {
  root: TrieNode10

  constructor() {
    this.root = new TrieNode10()
  }

  // Insert a number into the Trie by treating it as a string of digits
  insert(num: number) {
    let node = this.root
    const numStr = num.toString()

    for (const digit of numStr) {
      const idx = Number(digit)
      if (!node.children[idx]) {
        node.children[idx] = new TrieNode10()
      }
      node = node.children[idx]
    }
  }

  // Find the longest common prefix for a number in arr2 with the Trie
  findLongestPrefix(num: number): number {
    let node = this.root
    const numStr = num.toString()
    let length = 0

    for (const digit of numStr) {
      const idx = Number(digit)
      if (node.children[idx]) {
        // Increase length if the current digit matches
        length += 1
        node = node.children[idx]!
      } else {
        // Stop if no match for the current digit
        break
      }
    }
    return length
  }
}

function longestCommonPrefix(arr1: number[], arr2: number[]): number {
  const trie = new Trie10()

  // Step 1: Insert all numbers from arr1 into the Trie
  for (const num of arr1) {
    trie.insert(num)
  }

  let longestPrefix = 0

  // Step 2: Find the longest prefix match for each number in arr2
  for (const num of arr2) {
    const len = trie.findLongestPrefix(num)
    longestPrefix = Math.max(longestPrefix, len)
  }

  return longestPrefix
}

// Test case
console.log(longestCommonPrefix([12, 12], [15, 13])) // Output: 1
