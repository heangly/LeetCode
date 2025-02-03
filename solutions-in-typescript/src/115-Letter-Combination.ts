function letterCombinations(digits: string): string[] {
  if (!digits.length) return []

  const res: string[] = []
  const arr: string[][] = []

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

  for (const digit of digits) {
    const val = table[digit] || []
    if (val.length) {
      arr.push(val)
    }
  }

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < (arr[1]?.length || 1); j++) {
      for (let k = 0; k < (arr[2]?.length || 1); k++) {
        for (let l = 0; l < (arr[3]?.length || 1); l++) {
          const char1 = arr[0][i]
          const char2 = arr[1]?.[j] || ''
          const char3 = arr[2]?.[k] || ''
          const char4 = arr[3]?.[l] || ''
          res.push(char1 + char2 + char3 + char4)
        }
      }
    }
  }

  return res
}
