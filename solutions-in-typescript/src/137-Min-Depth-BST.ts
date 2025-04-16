// Time O(N) | Space: O(D)
function minDepth(root: TreeNode | null): number {
  if (!root) return 0

  const helper = (node: TreeNode | null, depth: number): number => {
    if (!node) return Infinity
    if (!node.left && !node.right) return depth

    const left = helper(node.left, depth + 1)
    const right = helper(node.right, depth + 1)

    return Math.min(left, right)
  }

  return helper(root, 1)
}
