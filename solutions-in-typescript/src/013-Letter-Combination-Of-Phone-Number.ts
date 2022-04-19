const letterCombinations = (digits: string): string[] => {
  if (!digits.length) return []

  const table = new Map<string, string[]>([
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']]
  ])

  const ans: string[] = []

  const permute = (str: string, idx: number) => {
    if (idx === digits.length) {
      ans.push(str)
      return
    }

    for (const x of table.get(digits[idx])!) {
      permute(str + x, idx + 1)
    }
  }

  permute('', 0)
  return ans
}

console.log(letterCombinations('23'))
console.log(letterCombinations(''))
console.log(letterCombinations('2'))
export {}
