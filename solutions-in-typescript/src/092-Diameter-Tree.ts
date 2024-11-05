class TreeNode1 {
  val: number
  left: TreeNode1 | null
  right: TreeNode1 | null
  constructor(val?: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function diameterOfBinaryTree(root: TreeNode1 | null): number {
  let diameter = 0

  function dfs(node: TreeNode1 | null): number {
    if (!node) return 0

    const left = dfs(node.left)
    const right = dfs(node.right)

    // Update the diameter with the path length through this node
    diameter = Math.max(diameter, left + right)

    // Return the height of the current node
    return 1 + Math.max(left, right)
  }

  dfs(root)
  return diameter
}

const tree = new TreeNode1(1)
tree.left = new TreeNode1(2)
tree.right = new TreeNode1(3)
tree.left.left = new TreeNode1(4)
tree.left.right = new TreeNode1(5)

console.log(diameterOfBinaryTree(tree))
