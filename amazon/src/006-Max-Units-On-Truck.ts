const maximumUnits = (boxTypes: number[][], truckSize: number): number => {
  const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0

  for (const box of sortedBoxTypes) {
    if (truckSize <= 0) return res

    while (box[0] > 0 && truckSize > 0) {
      truckSize--
      box[0]--
      res += box[1]
    }
  }

  return res
}

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1]
    ],
    4
  )
)
