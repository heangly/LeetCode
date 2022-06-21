// Time: O(n) | Space: O(u) where u is the length of simplified path
const simplifyPath = (path: string): string => {
  const arr = path.split('/')
  const stack: string[] = []

  for (const str of arr) {
    if (str === '' || str === '.') continue

    if (str === '..') {
      stack.length > 0 && stack.pop()
    } else {
      stack.push(str)
    }
  }

  console.log(stack)

  return '/' + stack.join('/')
}

// console.log(simplifyPath('/home/'))
// console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))
// console.log(simplifyPath('/a/./b/../../c/'))
