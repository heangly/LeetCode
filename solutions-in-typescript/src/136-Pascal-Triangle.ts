//  Time: O(N^2) | Space: O(1)
function generate(numRows: number): number[][] {
  const arr = [[1]]

  for (let i = 1; i < numRows; i++) {
    const prev = arr[i - 1]
    const curr = [1]

    for (let j = 1; j < i; j++) {
      curr.push(prev[j] + prev[j - 1])
    }

    curr.push(1)
    arr.push(curr)
  }

  return arr
}
