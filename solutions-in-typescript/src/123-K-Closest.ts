type Arr2 = {
  distance: number
  point: number[]
}


// Time: O(n log n)
// Space: O(n)
function kClosest(points: number[][], k: number): number[][] {
  const arr: Arr2[] = []
  const res: number[][] = []

  for (const point of points) {
    const distance = getDistance2(point)
    arr.push({ distance, point })
  }

  arr.sort((a, b) => a.distance - b.distance)

  for (const ele of arr) {
    if (res.length < k) {
      res.push(ele.point)
    } else {
      break
    }
  }

  return res
}

const getDistance2 = (x: number[]) => {
  const x1 = x[0] ** 2
  const x2 = x[1] ** 2
  return Math.sqrt(x1 + x2)
}
