/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Time: O(N) | Space: O(D)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  const helper = (node: TreeNode | null, runningSum: number): boolean => {
    if (!node) return false

    const sum = node.val + runningSum

    if (!node.left && !node.right) {
      return sum === targetSum
    }

    return helper(node.left, sum) || helper(node.right, sum)
  }

  return helper(root, 0)
}
