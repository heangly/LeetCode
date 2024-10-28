// Time: O(n(log(n))) | Space: O(n)
function kWeakestRows(mat: number[][], k: number): number[] {
  const kvPairs: Record<string, number>[] = []
  const output: number[] = []

  for (let i = 0; i < mat.length; i++) {
    const sum = mat[i].reduce((acc, curr) => curr + acc, 0)
    kvPairs.push({ index: i, value: sum })
  }

  kvPairs.sort((a, b) => (a.value === b.value ? b.index - a.index : b.value - a.value))

  while (output.length < k) {
    const pair = kvPairs.pop()!
    output.push(pair.index)
  }

  return output
}
