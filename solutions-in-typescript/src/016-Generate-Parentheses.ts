function generateParenthesis(n: number): string[] {
  const output: string[] = []

  const helper = (open: number, close: number, arr: string[]) => {
    if (open === n && close === n) {
      output.push(arr.join(''))
      return
    }

    if (open < n) {
      helper(open + 1, close, arr.concat('('))
    }

    if (close < open) {
      helper(open, close + 1, arr.concat(')'))
    }
  }

  helper(0, 0, [])

  return output
}
