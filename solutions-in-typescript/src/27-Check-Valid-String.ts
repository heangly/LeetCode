// Time: O(N) | Space: O(N)
function checkValidString(s: string): boolean {
  const left: number[] = []
  const star: number[] = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left.push(i)
    } else if (s[i] === '*') {
      star.push(i)
    } else {
      if (left.length) {
        left.pop()
      } else if (star.length) {
        star.pop()
      } else {
        return false
      }
    }
  }

  while (left.length && star.length) {
    const i = left.pop()!
    const j = star.pop()!

    if (i > j) return false
  }

  return left.length === 0
}
