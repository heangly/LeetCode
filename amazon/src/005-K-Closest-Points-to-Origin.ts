const euclidean = (num: number[]): number => {
  const x1 = num[0]
  const y1 = num[1]
  const x2 = 0
  const y2 = 0

  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

const kClosest = (points: number[][], k: number): number[][] => {
  const sortedArray = points.sort((a, b) => euclidean(a) - euclidean(b))
  return sortedArray.slice(0, k)
}

const res = kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4]
  ],
  2
)

console.log(res)
