// Time: O(N) | Space: O(1)
function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  const output: number[] = []

  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    }

    if (sum > target) {
      right--
    } else {
      left++
    }
  }

  return output
}
