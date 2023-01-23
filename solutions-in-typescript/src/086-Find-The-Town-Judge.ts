const findJudge = (n: number, trust: number[][]): number => {
  const Trusted = new Array(n + 1).fill(0)
  for (let [i, j] of trust) {
    Trusted[i] -= 1
    Trusted[j] += 1
  }
  for (let i = 1; i < Trusted.length; i++) {
    if (n - 1 === Trusted[i]) {
      return i
    }
  }
  return -1
}

console.log('====================================')
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3]
  ])
)
console.log('====================================')
