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

// Time: O(N)
// Space: O(log(n)) depend on depth of call stack
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  const helper = (node: TreeNode | null) => {
    if (!node) return

    helper(node.left)
    res.push(node.val)
    helper(node.right)
  }

  helper(root)

  return res
}
