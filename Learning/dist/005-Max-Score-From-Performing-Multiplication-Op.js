"use strict";
const maximumScore = (nums, multipliers) => {
    const m = multipliers.length;
    const n = nums.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(m + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) {
        for (let left = i; left >= 0; left--) {
            let mult = multipliers[i];
            let right = n - 1 - (i - left);
            dp[i][left] = Math.max(mult * nums[left] + dp[i + 1][left + 1], mult * nums[right] + dp[i + 1][left]);
            console.log(mult, '*', nums[left], '+', dp[i + 1][left + 1], '=', mult * nums[left] + dp[i + 1][left + 1]);
            console.log(mult, '*', nums[right], '+', dp[i + 1][left], '=', mult * nums[right] + dp[i + 1][left]);
            console.log(mult * nums[right] + dp[i + 1][left]);
            console.log(dp);
            console.log('');
        }
    }
    return dp[0][0];
};
console.log(maximumScore([-5, -3, -3, -2, 7, 1], [-10, -5, 3, 4, 6]));
