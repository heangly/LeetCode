class TreeNode5 {
  val: number
  left: TreeNode5 | null
  right: TreeNode5 | null
  constructor(val?: number, left?: TreeNode5 | null, right?: TreeNode5 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(H) where H is the height of the tree | Space: O(1)
function lowestCommonAncestor(root: TreeNode5 | null, p: TreeNode5 | null, q: TreeNode5 | null): TreeNode5 | null {
  if (!root || !p || !q) return null

  while (root) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else {
      return root
    }
  }

  return null
}
