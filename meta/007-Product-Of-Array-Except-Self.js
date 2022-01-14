const productExceptSelf = function (nums) {
  const leftdp = new Array(nums.length).fill(1)
  const rightdp = new Array(nums.length).fill(1)

  for (let i = nums.length - 2; i >= 0; i--) {
    rightdp[i] = rightdp[i + 1] * nums[i + 1]
  }

  const ans = [rightdp[0]]

  for (let i = 1; i < nums.length; i++) {
    leftdp[i] = leftdp[i - 1] * nums[i - 1]
    ans.push(leftdp[i] * rightdp[i])
  }

  return ans
}
