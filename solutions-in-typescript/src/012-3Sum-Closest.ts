// Time: O(n^2log(n)) | Space: O(1)
const threeSumClosest = (nums: number[], target: number): number => {
  let ans = Infinity
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }

      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return ans
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))
console.log(threeSumClosest([0, 0, 0], 1))
