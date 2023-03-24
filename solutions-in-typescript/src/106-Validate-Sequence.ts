// Time: O(N) | Space: O(1)
const isValidSubsequence = (array: number[], sequence: number[]): boolean => {
  let sequenceIndex = 0

  for (const arrayNumber of array) {
    const sequenceNumber = sequence[sequenceIndex]

    if (arrayNumber === sequenceNumber) {
      sequenceIndex++
    }
    if (sequenceIndex === sequence.length) return true
  }
  return false
}

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]
console.log(isValidSubsequence(array, sequence))
