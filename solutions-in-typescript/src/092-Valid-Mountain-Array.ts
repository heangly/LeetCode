// Time: O(n) | Space: O(n)
const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 3) return false
  let increase = false
  let decrease = false

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return false

    if (arr[i] > arr[i - 1]) {
      if (decrease) return false
      increase = true
    }

    if (arr[i] < arr[i - 1]) {
      if (!increase) return false
      decrease = true
    }
  }

  return increase && decrease
}

console.log(validMountainArray([2, 1]))
console.log(validMountainArray([3, 5, 5]))
console.log(validMountainArray([0, 3, 2, 1]))
