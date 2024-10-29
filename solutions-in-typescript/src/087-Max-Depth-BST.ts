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

// Time: O(n) | Space: O(h) where h is the height of the tree
function maxDepth(root: TreeNode | null): number {
  return dfs2(root, 0)
}

const dfs2 = (tree: TreeNode | null, max: number): number => {
  if (!tree) {
    return max
  }

  const left = dfs2(tree.left, max + 1)
  const right = dfs2(tree.right, max + 1)

  return Math.max(left, right)
}
