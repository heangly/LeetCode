const generateParenthesis = (n: number): string[] => {
  const ans: string[] = []

  const helper = (str: string, open: number, close: number) => {
    if (str.length === n * 2) {
      ans.push(str)
      return
    }

    if (open > 0) {
      helper(str + '(', open - 1, close + 1)
    }

    if (close > 0) {
      helper(str + ')', open, close - 1)
    }
  }

  helper('', n, 0)

  return ans
}

console.log(generateParenthesis(3))
console.log(generateParenthesis(1))
