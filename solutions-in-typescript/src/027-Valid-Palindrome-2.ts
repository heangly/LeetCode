// Time: O(N)
// Space: O(N)
function validPalindrome(s: string): boolean {
  const helper = (i: number, j: number, isDeleted: boolean): boolean => {
    if (i > j) return true

    if (s[i] !== s[j]) {
      if (isDeleted) return false
      return helper(i + 1, j, true) || helper(i, j - 1, true)
    }

    return helper(i + 1, j - 1, isDeleted)
  }

  return helper(0, s.length - 1, false)
}
