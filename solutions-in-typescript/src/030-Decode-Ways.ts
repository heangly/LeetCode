// Time: O(N) | Space: O(N)
function numDecodings(s: string): number {
  const memo: Record<string, number> = {}

  const isInRange = (group: string) => {
    if (group[0] === '0') return false
    return +group >= 1 && +group <= 26
  }

  const helper = (i: number): number => {
    if (i in memo) return memo[i]

    if (i === s.length) return 1
    const group1 = s.slice(i, i + 1)
    const group2 = s.slice(i, i + 2)

    let count = 0

    if (isInRange(group1)) {
      count += helper(i + 1)
    }

    if (isInRange(group2)) {
      count += helper(i + 2)
    }

    memo[i] = count
    return count
  }

  return helper(0)
}

console.log(numDecodings('11106'))
