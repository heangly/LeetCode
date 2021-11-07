var lengthOfLongestSubstring = function (s) {
  let idx1 = 0
  let idx2 = 0
  let longest = 0
  let seen = {}

  while (idx2 < s.length) {
    let char = s[idx2]

    if (char in seen) {
      idx1 = Math.max(seen[char] + 1, idx1)
    }
    longest = Math.max(longest, idx2 - idx1 + 1)
    seen[char] = idx2
    idx2 += 1
  }

  return longest
}

var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length
  }

  let counter = 0
  let longest = -Infinity
  let seen = []

  for (const char of s) {
    let seenIdx = seen.indexOf(char)

    // not seen yet
    if (seenIdx === -1) {
      seen.push(char)
      counter += 1
    } else {
      // when seen already (exists)
      seen = seen.slice(seenIdx + 1)
      seen.push(char)
      longest = counter > longest ? counter : longest
      counter = seen.length
    }
  }

  return counter > longest ? counter : longest
}
