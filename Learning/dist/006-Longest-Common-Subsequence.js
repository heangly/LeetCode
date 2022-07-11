"use strict";
// https://leetcode.com/problems/longest-common-subsequence/
// Time: O(t1 * t2) | space: (t1 * t2)
const longestCommonSubsequence = (text1, text2) => {
    const dp = new Array(text1.length + 1)
        .fill(0)
        .map(() => new Array(text2.length + 1).fill(0));
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            const left = dp[i][j - 1];
            const diag = dp[i - 1][j - 1];
            const top = dp[i - 1][j];
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = diag + 1;
            }
            else {
                dp[i][j] = Math.max(left, diag, top);
            }
        }
    }
    return dp.pop().pop();
};
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv'));
// console.log(longestCommonSubsequence('abc', 'abc'))
// console.log(longestCommonSubsequence('abc', 'def'))
