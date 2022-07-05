// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/

const maxArea = (
  h: number,
  w: number,
  horizontalCuts: number[],
  verticalCuts: number[]
): number => {
  horizontalCuts = [0, ...horizontalCuts.sort((a, b) => a - b), h]
  verticalCuts = [0, ...verticalCuts.sort((a, b) => a - b), w]
  let horimax = 1
  let vertimax = 1
  for (let i = 1; i < horizontalCuts.length; i++) {
    horimax = Math.max(horizontalCuts[i] - horizontalCuts[i - 1], horimax)
  }
  for (let i = 1; i < verticalCuts.length; i++) {
    vertimax = Math.max(verticalCuts[i] - verticalCuts[i - 1], vertimax)
  }
  return Number((BigInt(vertimax) * BigInt(horimax)) % BigInt(10 ** 9 + 7))
}

console.log(maxArea(1000000000, 1000000000, [2], [2]))

export {}
