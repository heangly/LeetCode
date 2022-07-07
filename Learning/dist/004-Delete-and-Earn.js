"use strict";
// https://leetcode.com/problems/delete-and-earn/
// Time: O(n) | space : O(n) where n is the length of max from nums
const deleteAndEarn = (nums) => {
    let max = Math.max(...nums);
    let dp = new Array(max).fill(0);
    for (const num of nums) {
        dp[num] = (dp[num] || 0) + num;
    }
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 2] + dp[i], dp[i - 1]);
    }
    return dp.pop();
};
// console.log(deleteAndEarn([3, 4, 2]))
console.log(deleteAndEarn([3, 1]));
// console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
