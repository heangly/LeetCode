// Time: O(N)
// Space: O(1)
function replaceElements(arr: number[]): number[] {
  let max = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i]
    arr[i] = max
    max = Math.max(max, curr)
  }

  return arr
}
