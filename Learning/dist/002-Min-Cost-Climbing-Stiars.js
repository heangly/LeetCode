"use strict";
// https://leetcode.com/problems/min-cost-climbing-stairs/
const minCostClimbingStairs = (cost) => {
    const dp = (i, memo = {}) => {
        if (i <= 1)
            return 0;
        if (i in memo)
            return memo[i];
        const downOne = cost[i - 1] + dp(i - 1, memo);
        const downTwo = cost[i - 2] + dp(i - 2, memo);
        memo[i] = Math.min(downOne, downTwo);
        return memo[i];
    };
    return dp(cost.length);
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
