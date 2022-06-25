// Time: O(n^K) | Space: O(n^k)
const combine = (n: number, k: number): number[][] => {
  const ans: number[][] = []
  helper(n, k, 1, [], ans)
  return ans
}

const helper = (
  n: number,
  k: number,
  idx: number,
  seq: number[],
  ans: number[][]
): void => {
  if (seq.length === k) {
    ans.push(seq)
    return
  }

  for (let i = idx; i <= n; i++) {
    helper(n, k, i + 1, [...seq, i], ans)
  }
}

console.log(combine(1, 1))
console.log(combine(4, 3))
