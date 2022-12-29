const generateParenthesis = (n: number): string[] => {
  const ans: string[] = []

  const helper = (arr: string[], left: number, right: number) => {
    if (left === n && right === n) {
      ans.push(arr.join(''))
      return
    }

    if (left < n) {
      helper(arr.concat('('), left + 1, right)
    }

    if (right < left && right < n) {
      helper(arr.concat(')'), left, right + 1)
    }
  }

  helper([], 0, 0)

  return ans
}

console.log('====================================')
console.log(generateParenthesis(3))
console.log('====================================')
