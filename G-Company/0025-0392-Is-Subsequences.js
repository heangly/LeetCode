var isSubsequence = function (s, t) {
  let sPointer = 0
  for (const char of t) {
    if (char === s[sPointer]) sPointer++
  }

  return sPointer === s.length
}
