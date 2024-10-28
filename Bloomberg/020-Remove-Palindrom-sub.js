//https://leetcode.com/problems/remove-palindromic-subsequences/
// Time:O(n) | Space:O(1)
const removePalindromeSub = (s) => {
  if (!s.length) return 0
  if (isPalindrome(s)) return 1
  return 2
}

const isPalindrome = (s) => {
  let i = 0
  let j = s.length - 1

  while (i <= j) {
    if (s[i] !== s[j]) return false
    i++
    j--
  }

  return true
}

// console.log(removePalindromeSub('ababa'))
// console.log(removePalindromeSub('abb'))
console.log(removePalindromeSub('bbaabaaa'))

/**
 *    bbaabaaa
 *
 *
 */
