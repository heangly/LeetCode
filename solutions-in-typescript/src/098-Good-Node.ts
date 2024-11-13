class TreeNode8 {
  val: number
  left: TreeNode8 | null
  right: TreeNode8 | null
  constructor(val?: number, left?: TreeNode8 | null, right?: TreeNode8 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(H) where H is the height of the tree
function goodNodes(root: TreeNode8 | null): number {
  let ans = 0

  const helper = (node: TreeNode8 | null, maxSoFar: number) => {
    if (!node) return

    // Increment count if it's a good node
    if (node.val >= maxSoFar) ans++

    // Update maxSoFar for the next recursion calls
    const newMax = Math.max(maxSoFar, node.val)

    helper(node.left, newMax)
    helper(node.right, newMax)
  }

  helper(root, -Infinity)

  return ans
}
