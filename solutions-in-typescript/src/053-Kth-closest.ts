const getDistance = (x: number, y: number) => {
  return Math.sqrt(x ** 2 + y ** 2)
}

type Arr = {
  distance: number
  point: number[]
}

function kClosest(points: number[][], k: number): number[][] {
  const arr: Arr[] = []
  const output: number[][] = []

  for (const [x, y] of points) {
    const distance = getDistance(x, y)
    arr.push({
      distance,
      point: [x, y]
    })
  }

  arr.sort((a, b) => b.distance - a.distance)

  while (k > 0) {
    const { point } = arr.pop()!
    output.push(point)
  }

  return output
}
