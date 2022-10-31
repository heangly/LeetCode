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

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false
  if (!root.left && !root.right) return targetSum === root.val
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  )
}

const tree = new TreeNode(5)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(11)
tree.left.left.left = new TreeNode(7)
tree.left.left.right = new TreeNode(2)
tree.right = new TreeNode(8)
tree.right.left = new TreeNode(13)
tree.right.right = new TreeNode(4)
tree.right.right.right = new TreeNode(1)

console.log(hasPathSum(tree, 22))

export {}
