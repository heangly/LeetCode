function kClosest(points: number[][], k: number): number[][] {
  const table: Record<string, number[][]> = {}
  const res: number[][] = []

  for (const point of points) {
    const res = getDistance2(point)

    if (!(res in table)) {
      table[res] = []
    }

    table[res].push(point)
  }

  const keys = Object.keys(table).sort((a, b) => +a - +b)

  for (const key of keys) {
    if (res.length < k) {
      res.push(...table[key])
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
