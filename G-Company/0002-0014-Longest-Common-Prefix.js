const longestCommonPrefix = (strs) => {
  if (strs.length === 1) {
    return strs[0]
  }
  strs.sort()
  let firstElement = strs[0]
  let lastElement = strs[strs.length - 1]

  let ans = []
  let idx = 0
  while (idx < firstElement.length && firstElement[idx] === lastElement[idx]) {
    ans.push(firstElement[idx])
    idx += 1
  }

  return ans.join('')
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
