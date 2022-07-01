// https://leetcode.com/problems/maximum-units-on-a-truck/

// Time : O(nlog(n)) | space: O(1)
const maximumUnits = (boxTypes: number[][], truckSize: number): number => {
  boxTypes.sort((a, b) => b[1] - a[1])
  let ans = 0

  for (const boxType of boxTypes) {
    const [num, unit] = boxType

    if (truckSize >= num) {
      truckSize -= num
      ans += num * unit
    } else {
      ans += unit * truckSize
      return ans
    }
  }

  return ans
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
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9]
    ],
    10
  )
)
