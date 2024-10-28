// Time: O(4^N * N) | Space: O(N)
const letterCombination = (digits: string): string[] => {
  if (!digits.length) return []

  const output: string[] = []
  const table: Record<string, string[]> = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const helper = (accum: string, idx: number) => {
    if (idx >= digits.length) {
      output.push(accum)
      return
    }

    for (const letter of table[digits[idx]]) {
      helper(accum + letter, idx + 1)
    }
  }

  helper('', 0)

  return output
}

console.log(letterCombination(''))
