// Time: O(N) | Space: O(1)
function isValid(s: string): boolean {
  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack: string[] = []

  for (const char of s) {
    if (!(char in pairs)) {
      stack.push(char)
    } else if (stack.pop() !== pairs[char]) {
      return false
    }
  }

  return stack.length === 0
}
