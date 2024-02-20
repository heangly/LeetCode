// Time: O(n^2 * d) | Space: O(n^2 * d)
function minDifficulty(jobDifficulty: number[], d: number): number {
  const n = jobDifficulty.length
  if (n < d) return -1
  const memo: Record<string, number> = {}

  const dfs = (i: number, remainingDays: number, currMax: number): number => {
    if (i === jobDifficulty.length) {
      if (remainingDays === 0) {
        return 0
      } else {
        return Infinity
      }
    }

    if (remainingDays === 0) return Infinity

    const key = `${i}-${remainingDays}-${currMax}`
    if (key in memo) return memo[key]

    currMax = Math.max(currMax, jobDifficulty[i])

    const continueTheDay = dfs(i + 1, remainingDays, currMax)
    const startNewDay = currMax + dfs(i + 1, remainingDays - 1, -Infinity)
    const res = Math.min(continueTheDay, startNewDay)
    memo[key] = res
    return memo[key]
  }

  return dfs(0, d, -Infinity)
}

const jobDifficulty = [6, 5, 4, 3, 2, 1]
const d = 2
console.log(minDifficulty(jobDifficulty, d))
