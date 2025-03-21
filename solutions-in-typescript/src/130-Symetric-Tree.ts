// Time: O(N)
// Space: O(D) where D is the depth of the tree
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  const helper = (first: TreeNode | null, second: TreeNode | null): boolean => {
    if (!first && !second) return true
    if (first?.val !== second?.val) return false

    const left = helper(first!.left, second!.right)
    const right = helper(first!.right, second!.left)

    return left && right
  }

  return helper(root.left, root.right)
}
