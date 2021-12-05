var canJump = function (nums) {
  if (!nums.length) return false
  if (nums.length === 1) return true
  if (nums.length === 2) return nums[0] >= 1

  let i = 0
  let j = nums[0]

  while (i < nums.length) {
    i = Math.max(...nums.slice(i + 1, j + 1)) + 1
    console.log(i)
  }

  console.log(i)
}

console.log(canJump([2, 3, 1, 1, 4]))
