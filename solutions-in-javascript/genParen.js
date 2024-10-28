const generateParenthesis = (n) => {
  const ans = []
  const gen = (str, left, right) => {
    if (left === n && right === n) {
      ans.push(str)
      return
    }

    if (left < n) {
      gen(str + '(', left + 1, right)
    }

    if (left > right && right < n) {
      gen(str + ')', left, right + 1)
    }
  }

  gen('', 0, 0)

  return ans
}

console.log(generateParenthesis(3))
