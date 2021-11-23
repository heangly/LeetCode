const minWindow = (s, t) => {
  let sIdx = s.indexOf(t[0])
  if (sIdx === -1) return ''
  if (t.length === 1) return t

  let tIdx = 0
  let subStringLen = Infinity
  let result = ''

  while (sIdx < s.length) {
    if (s[sIdx] === t[tIdx]) tIdx++

    if (tIdx === t.length) {
      tIdx--
      let end = sIdx

      while (tIdx >= 0) {
        s[sIdx] === t[tIdx] && tIdx--
        sIdx--
      }

      sIdx++
      tIdx++

      let newLen = end + 1 - sIdx
      if (subStringLen > newLen) {
        subStringLen = newLen
        result = s.slice(sIdx, end + 1)
      }
    }
    sIdx++
  }

  return subStringLen === Infinity ? '' : result
}
