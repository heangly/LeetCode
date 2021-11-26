const stoneGameIII = (A) => {
  const dp = Array(A.length).fill(-Infinity)

  for (let i = A.length - 1; i >= 0; i--) {
    let p = 0
    for (let numStones = 1; numStones <= 3; numStones++) {
      if (i + numStones > A.length) break
      p += A[i + numStones - 1]
      dp[i] = Math.max(dp[i], p - (dp[i + numStones] || 0))
    }
  }

  if (dp[0] === 0) return 'Tie'
  if (dp[0] > 0) return 'Alice'
  return 'Bob'
}
