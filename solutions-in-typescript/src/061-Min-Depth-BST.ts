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

const minDepth = (root: TreeNode | null): number => {
  if (!root) return 0
  const helper = (node: TreeNode | null, depth: number): number => {
    if (!node) return Infinity
    if (!node.left && !node.right) return depth
    return Math.min(helper(node.left, depth + 1), helper(node.right, depth + 1))
  }

  return helper(root, 1)
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)
console.log(minDepth(tree))

export {}
