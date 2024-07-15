// Time: O(N) | Space: O(1)
function isValid(s: string): boolean {
  const openBraces = new Set(['(', '[', '{'])
  const pairs: Record<string, string> = { ')': '(', '}': '{', ']': '[' }
  const stack: string[] = []

  for (const char of s) {
    if (openBraces.has(char)) {
      stack.push(char)
    } else {
      if (!stack.length || stack.pop() !== pairs[char]) return false
    }
  }

  return stack.length === 0
}
