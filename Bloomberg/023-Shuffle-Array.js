//https://leetcode.com/problems/shuffle-the-array/

const shuffle = (nums, n) => {
  const mid = n
  const arr = []
  for (let i = 0; i < mid; i++) {
    arr.push(nums[i], nums[mid + i])
  }
  return arr
}

const nums = [2, 5, 1, 3, 4, 7]
const n = 3
console.log(shuffle(nums, n))
