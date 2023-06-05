// Time: O(N) | Space: O(N)
const numDecodings = (s: string): number => {
  const memo: Record<string, number> = {}

  const isInRange = (group: string): boolean => {
    if (group[0] === '0') return false
    return +group >= 1 && +group <= 26
  }

  const dp = (index: number) => {
    if (index === s.length) return 1
    if (index in memo) return memo[index]
    let count = 0
    const group1 = s.slice(index, index + 1)
    const group2 = s.slice(index, index + 2)

    if (isInRange(group1)) {
      count += dp(index + 1)
    }

    if (isInRange(group2)) {
      count += dp(index + 2)
    }

    memo[index] = count

    return count
  }

  return dp(0)
}

console.log(numDecodings('11106'))
