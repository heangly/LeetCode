// n = num of posts, k = num of colors
// There cannot be three or more consecutive posts with the same color (max same 2)
function numWays(n: number, k: number): number {
  const memo: Record<string, number> = {}

  const helper = (posts: number, colorArray: number[]): number => {
    if (colorArray.length > 2) {
      const thirdColor = colorArray[colorArray.length - 1]
      const secondColor = colorArray[colorArray.length - 2]
      const firstColor = colorArray[colorArray.length - 3]
      if (firstColor === secondColor && firstColor === thirdColor) return 0
    }

    if (posts === 0) return 1

    const key = JSON.stringify(colorArray) + posts.toString()
    console.log(key)
    if (key in memo) return memo[key]

    let res = 0

    for (let i = 0; i < k; i++) {
      res += helper(posts - 1, [...colorArray, i])
    }

    memo[key] = res

    return memo[key]
  }

  const output = helper(n, [])
  console.log(Object.keys(memo).length)
  return output
}

console.log(numWays(7, 2))
