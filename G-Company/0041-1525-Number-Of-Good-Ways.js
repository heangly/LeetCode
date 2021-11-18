var numSplits = function (s) {
  const prefix = []
  let prefixCount = 0

  const suffix = []
  let suffixCount = 0

  const map1 = {}
  const map2 = {}

  let ans = 0

  let len = s.length - 1

  for (let i = s.length - 1; i >= 0; i--) {
    if (!(s[len - i] in map1)) {
      prefixCount++
      map1[s[len - i]] = true
    }
    prefix.push(prefixCount)

    if (!(s[i] in map2)) {
      suffixCount++
      map2[s[i]] = true
    }
    suffix.push(suffixCount)
  }

  suffix.reverse()

  for (let i = 0; i < prefix.length - 1; i++) {
    if (prefix[i] === suffix[i + 1]) ans++
  }

  return ans
}

console.log(numSplits('aacaba'))
