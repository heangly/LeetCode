// https://leetcode.com/problems/find-and-replace-in-string/
// Time: O(n * m) | space: O(n)
const findReplaceString = (
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string => {
  const ans: string[] = [...s]

  for (let i = 0; i < indices.length; i++) {
    if (s.slice(indices[i], indices[i] + sources[i].length) !== sources[i])
      continue

    ans[indices[i]] = targets[i]
    for (let j = indices[i] + 1; j < indices[i] + sources[i].length; j++) {
      ans[j] = ''
    }
  }

  return ans.join('')
}

console.log(
  findReplaceString(
    'jjievdtjfb',
    [4, 6, 1],
    ['md', 'tjgb', 'jf'],
    ['foe', 'oov', 'e']
  )
)
