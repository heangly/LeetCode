"use strict";
// leetcode.com/problems/house-robber/
const rub = (nums) => {
    const dp = [0, ...nums];
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(dp[i] + dp[i - 2], dp[i - 1]);
    }
    return dp.pop();
};
