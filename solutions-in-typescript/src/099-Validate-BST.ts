class TreeNode9 {
  val: number
  left: TreeNode9 | null
  right: TreeNode9 | null
  constructor(val?: number, left?: TreeNode9 | null, right?: TreeNode9 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(H) where H is the height of the tree
function isValidBST(root: TreeNode9 | null): boolean {
  if (!root) return true

  const dfs9 = (tree: TreeNode9 | null, min: number, max: number): boolean => {
    if (!tree) return true

    if (tree.val <= min || tree.val >= max) return false

    const left = dfs9(tree.left, min, tree.val)
    const right = dfs9(tree.right, tree.val, max)

    return left && right
  }

  return dfs9(root, -Infinity, Infinity)
}
