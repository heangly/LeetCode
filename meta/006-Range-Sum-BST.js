//https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const rangSumBST = (root, low, high) => {
  let sum = 0
  const dfs = (tree) => {
    if (!tree) return 0

    if (tree.val >= low && tree.val <= high) {
      sum += tree.val
    }

    dfs(tree.left)
    dfs(tree.right)
  }
  dfs(root)
  return sum
}
