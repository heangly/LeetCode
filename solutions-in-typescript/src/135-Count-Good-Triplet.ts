// Time:O(N^3) | Space: O(1)
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let count = 0

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const diffA = Math.abs(arr[i] - arr[j])
        const diffB = Math.abs(arr[j] - arr[k])
        const diffC = Math.abs(arr[i] - arr[k])

        if (diffA <= a && diffB <= b && diffC <= c) {
          count++
        }
      }
    }
  }
  return count
}
