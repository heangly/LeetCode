// https://leetcode.com/problems/validate-binary-search-tree/

class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

const isValidBST = (root) => {
  const helper = (tree, low, high) => {
    if (!tree) return true

    if (tree.val <= low || tree.val >= high) return false

    return (
      helper(tree.left, low, tree.val) && helper(tree.right, tree.val, high)
    )
  }

  return helper(root, -Infinity, Infinity)
}

const treeNode = new TreeNode(5)
treeNode.left = new TreeNode(1)
treeNode.right = new TreeNode(4)
treeNode.right.left = new TreeNode(3)
treeNode.right.right = new TreeNode(6)

console.log(isValidBST(treeNode))

/**
 *        5
 *    4       6
 * 3     7
 */
