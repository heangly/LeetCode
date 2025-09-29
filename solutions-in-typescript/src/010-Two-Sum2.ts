// Time: O(N) | Space: O(1)
function twoSum(numbers: number[], target: number): number[] {
  let i = 0
  let j = numbers.length - 1

  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) return [i + 1, j + 1]

    if (sum > target) {
      j--
    } else {
      i++
    }
  }

  return []
}
