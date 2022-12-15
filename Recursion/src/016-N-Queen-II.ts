// Time: O(N!) | Space: O(N)
const totalNQUeens = (n: number): number => {
  const backtrack = (
    row: number,
    diagonals: Set<number>,
    antiDiagnoals: Set<number>,
    cols: Set<number>
  ) => {
    if (row === n) return 1
    let sol = 0

    for (let col = 0; col < n; col++) {
      const currDiag = row - col
      const currentAntiDiag = row + col

      if (
        cols.has(col) ||
        diagonals.has(currDiag) ||
        antiDiagnoals.has(currentAntiDiag)
      )
        continue

      cols.add(col)
      diagonals.add(currDiag)
      antiDiagnoals.add(currentAntiDiag)

      sol += backtrack(row + 1, diagonals, antiDiagnoals, cols)

      cols.delete(col)
      diagonals.delete(currDiag)
      antiDiagnoals.delete(currentAntiDiag)
    }
    return sol
  }

  return backtrack(0, new Set(), new Set(), new Set())
}

console.log('====================================')
console.log(totalNQUeens(4))
console.log('====================================')

export {}
