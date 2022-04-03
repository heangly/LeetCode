const longestPalindrome = (s: string): string => {
  let max = ''

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expand(i, i, s)
    const eventPaldindrome = expand(i, i + 1, s)
    let tempMax = ''

    if (oddPalindrome.length > eventPaldindrome.length) {
      tempMax = oddPalindrome
    } else {
      tempMax = eventPaldindrome
    }

    if (max.length < tempMax.length) {
      max = tempMax
    }
  }

  return max
}

const expand = (left: number, right: number, s: string): string => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }

  return s.slice(left + 1, right)
}

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
export {}
