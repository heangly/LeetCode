const combinationSum = (candidates: number[], target: number): number[][] => {
  const ans: number[][] = []

  const search = (idx: number, sumSoFar: number, arraySoFar: number[]) => {
    if (sumSoFar === target) {
      ans.push(arraySoFar)
    }

    if (sumSoFar > target) return

    for (let i = idx; i < candidates.length; i++) {
      search(i, sumSoFar + candidates[i], arraySoFar.concat(candidates[i]))
    }
  }

  search(0, 0, [])

  return ans
}

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum([2, 3, 5], 8))
console.log(combinationSum([2], 1))
