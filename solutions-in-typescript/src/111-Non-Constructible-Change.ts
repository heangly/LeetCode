// Time: O(N(log(N))) | Space: O(1)
const nonConstructibleChange = (coins: number[]) => {
  coins.sort((a, b) => a - b)
  let canChangeUpTo = 0

  for (const coin of coins) {
    if (coin > canChangeUpTo + 1) return canChangeUpTo + 1
    canChangeUpTo += coin
  }

  return canChangeUpTo + 1
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
