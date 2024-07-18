// Time: O((4^n) / sqr(n)) | Space: O(N)
function generateParenthesis(n: number): string[] {
  const ans: string[] = []

  const dfs = (open: number, close: number, str: string) => {
    if (open > n || close > open) return

    if (open === n && close === n) {
      ans.push(str)
      return
    }

    dfs(open + 1, close, str + '(')
    dfs(open, close + 1, str + ')')
  }

  dfs(0, 0, '')

  return ans
}

console.log(generateParenthesis(3))
