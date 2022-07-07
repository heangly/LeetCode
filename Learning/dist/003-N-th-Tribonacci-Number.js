"use strict";
// https://leetcode.com/problems/n-th-tribonacci-number/
// Time: O(1) | Space: O(1) because the constraint is only up to 38 tribonacci value
const tribonacci = (n, memo = {}) => {
    const arr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr[n];
};
console.log(tribonacci(30));
