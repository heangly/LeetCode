// Time: O(N)
// Space: O(N)
function findShortestSubArray(nums: number[]): number {
  const table: Record<string, number> = {}
  const maxDegree: { freq: number; candidates: number[] } = { freq: 0, candidates: [] }
  const firstAndLastIndex: Record<string, number[]> = {}
  let output = nums.length

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (!Object.hasOwn(table, num)) {
      table[num] = 0
      firstAndLastIndex[num] = [i, i]
    }

    table[num]++
    firstAndLastIndex[num][1] = i // update last index
    const currentFreq = table[num]

    if (currentFreq > maxDegree.freq) {
      maxDegree.freq = currentFreq
      maxDegree.candidates = [num]
    } else if (currentFreq === maxDegree.freq) {
      maxDegree.candidates.push(num)
    }
  }

  for (const candidate of maxDegree.candidates) {
    const [firstIndex, lastIndex] = firstAndLastIndex[candidate]
    output = Math.min(output, lastIndex - firstIndex + 1)
  }

  return output
}
