// Time: O(N) | Space: O(N)
function isAnagram(s: string, t: string): boolean {
  let len = 0

  const hashMap: Record<string, number> = {}
  for (const char of s) {
    hashMap[char] = (hashMap[char] ?? 0) + 1
    len++
  }

  for (const char of t) {
    // if the char of t not in s -> not anagram
    if (!(char in hashMap)) {
      return false
    }

    hashMap[char]--
    len--

    if (hashMap[char] === 0) {
      delete hashMap[char]
    }
  }

  return len === 0
}

// Time: O(nLogn) | Space: O(1)
// function isAnagram(s: string, t: string): boolean {
//   return s.split('').sort().join('') === t.split('').sort().join('')
// }

console.log(isAnagram('anagram', 'nagaram'))
