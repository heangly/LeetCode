// https://leetcode.com/problems/k-closest-points-to-origin/

// @params points: [[number, number], [number, number]]
// @params k: number
// @params return [[number, number]]
var kClosest = function (points, k) {
  const obj = {}
  for (const point of points) {
    const distance = getDistance(point)
    if (distance in obj) {
      obj[distance].push(point)
    } else {
      obj[distance] = [point]
    }
  }

  const keys = Object.keys(obj).sort((a, b) => a - b)

  const ans = []

  for (const key of keys) {
    for (const value of obj[key]) {
      if (ans.length === k) break
      ans.push(value)
    }
  }

  return ans
}

const getDistance = (point) => {
  return Math.sqrt(point[0] ** 2 + point[1] ** 2)
}

console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2]
    ],
    1
  )
)

// var kClosest = function (points, k) {
//   points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2))
//   return points.slice(0, k)
// }
