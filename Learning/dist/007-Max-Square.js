"use strict";
// https://leetcode.com/problems/maximal-square/
// Time: O(n * m) | Space: O (n * m)
const maximalSquare = (matrix) => {
    let max = 0;
    const dp = new Array(matrix.length + 1)
        .fill(0)
        .map(() => new Array(matrix[0].length + 1).fill(0));
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            const left = dp[i][j - 1];
            const top = dp[i - 1][j];
            const diag = dp[i - 1][j - 1];
            if (matrix[i - 1][j - 1] === '0')
                continue;
            dp[i][j] = Math.min(left, top, diag) + 1;
            max = Math.max(max, dp[i][j]);
        }
    }
    return max * max;
};
const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];
console.log(maximalSquare(matrix));
