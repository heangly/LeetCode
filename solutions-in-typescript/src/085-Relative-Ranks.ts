// Time: O(3n) | Space: O(2n)
const findRelativeRanks = (score: number[]): string[] => {
  const sortedScore = [...score].sort((a, b) => b - a)
  const ranks: Record<string, string> = {
    1: 'Gold Medal',
    2: 'Silver Medal',
    3: 'Bronze Medal'
  }
  const sortedPlacement: Record<string, string> = {}

  for (let i = 0; i < sortedScore.length; i++) {
    const placement = ranks[i + 1] || i + 1
    sortedPlacement[sortedScore[i]] = placement.toString()
  }

  return score.map((s) => sortedPlacement[s])
}

console.log('====================================')
console.log(findRelativeRanks([5, 4, 3, 2, 1]))
console.log('====================================')
