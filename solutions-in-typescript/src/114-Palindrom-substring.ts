// Time & Space: O(n⋅2^n)
function partition(s: string): string[][] {
  const res: string[][] = []

  const isPalindrome = (i: number, j: number): boolean => {
    while (i < j) {
      if (s[i] !== s[j]) return false
      i++
      j--
    }
    return true
  }

  const helper = (startIndex: number, arr: string[]) => {
    if (startIndex === s.length) {
      res.push([...arr]) // Push a copy of the current partition
      return
    }

    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(startIndex, i)) {
        // Check palindrome directly on s
        arr.push(s.substring(startIndex, i + 1)) // Choose
        helper(i + 1, arr) // Explore
        arr.pop() // Backtrack
      }
    }
  }

  helper(0, [])
  return res
}
