/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isPossible = function (nums) {
  const freMap = {}
  const openMap = {}

  nums.forEach((num) => {
    freMap[num] = (freMap[num] || 0) + 1
  })

  for (const n of nums) {
    if (freMap[n] === 0) {
      continue
    }

    if (openMap[n] > 0) {
      openMap[n] = openMap[n] - 1
      openMap[n + 1] = (openMap[n + 1] || 0) + 1
    } else if (freMap[n + 1] > 0 && freMap[n + 2] > 0) {
      freMap[n + 1] = freMap[n + 1] - 1
      freMap[n + 2] = freMap[n + 2] - 1
      openMap[n + 3] = (openMap[n + 3] || 0) + 1
    } else {
      return false
    }

    freMap[n] = freMap[n] - 1
  }

  return true
}
