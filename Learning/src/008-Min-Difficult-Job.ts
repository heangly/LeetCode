// https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/

const minDifficulty = (jobDifficulty: number[], d: number): number => {
  if (jobDifficulty.length < d) return -1

  const cache: { [key: string]: number } = {}

  const dfs = (start: number, numDays: number) => {
    if (numDays === d) {
      return start === jobDifficulty.length ? 0 : Infinity
    }

    const key = `${start}-${numDays}`

    if (key in cache) return cache[key]

    const end = jobDifficulty.length - d + numDays

    let result = Infinity
    let max = -Infinity

    for (let i = start; i <= end; i++) {
      max = Math.max(max, jobDifficulty[i])
      result = Math.min(result, max + dfs(i + 1, numDays + 1))
    }

    cache[key] = result

    return cache[key]
  }

  return dfs(0, 0)
}

console.log(minDifficulty([6, 5, 4, 3, 2, 1], 2))
