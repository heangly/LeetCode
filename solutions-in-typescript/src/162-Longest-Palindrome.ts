// Time: O(N) | Space: O(N)
function longestPalindrome(s: string): number {
  const mySet = new Set()
  let len = 0

  for (const char of s) {
    if (mySet.has(char)) {
      mySet.delete(char)
      len += 2
    } else {
      mySet.add(char)
    }
  }

  return mySet.size > 0 ? len + 1 : len
}
