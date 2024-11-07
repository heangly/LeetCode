class TreeNode4 {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(H) where H is the height of the tree
function isSameTree(p: TreeNode4 | null, q: TreeNode4 | null): boolean {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false

  const left = isSameTree(p.left, q.left)
  const right = isSameTree(p.right, q.right)

  return left && right
}
