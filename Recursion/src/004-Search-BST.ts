// https://leetcode.com/problems/search-in-a-binary-search-tree/solution/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(log(n)) | space: O(log(n))
const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (!root) return null
  if (root.val === val) return root

  if (root.val < val) return searchBST(root.right, val)
  return searchBST(root.left, val)
}

export {}
