const table: Record<string, string[]> = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

// Time: O(4^n) | Space: (4^n)
function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  const res: string[] = []

  const helper = (i: number, arr: string[]) => {
    if (i === digits.length) {
      res.push(arr.join(''))
      return
    }

    for (const char of table[digits[i]]) {
      helper(i + 1, arr.concat(char))
    }
  }

  helper(0, [])

  return res
}
