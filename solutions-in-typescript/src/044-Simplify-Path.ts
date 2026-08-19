// Time: O(N)
// Space: O(N)
function simplifyPath(path: string): string {
  const token: string[] = []
  let current = ''

  for (let i = 0; i <= path.length; i++) {
    const char = path[i]

    if (char === '/' || i === path.length) {
      if (current === '..') {
        token.pop()
      } else if (current !== '' && current !== '.') {
        token.push(current)
      }

      current = ''
    } else {
      current += char
    }
  }

  return '/' + token.join('/')
}
