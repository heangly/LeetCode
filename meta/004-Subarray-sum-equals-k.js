// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subArraySum = (num, k) => {
  let sum = 0
  const arr = []

  for (const n of num) {
    while (sum > k && arr.length) {
      sum -= arr.shift()
    }

    arr.push(n)
    sum += n

    if (sum === k) return arr.length
  }
}

console.log(subArraySum([1, 4, 1, 1, 1], 3))
