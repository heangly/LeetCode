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

// Time: O(n) | Space: O(n)
function isValidBST(root: TreeNode | null): boolean {
  const helper = (
    tree: TreeNode | null,
    upperBound: number,
    lowerBound: number
  ): boolean => {
    if (!tree) return true
    if (tree.val >= upperBound || tree.val <= lowerBound) return false

    return (
      helper(tree.left, tree.val, lowerBound) &&
      helper(tree.right, upperBound, tree.val)
    )
  }

  return helper(root, Infinity, -Infinity)
}

const tree = new TreeNode(5)
tree.left = new TreeNode(1)
tree.right = new TreeNode(4)
tree.right.right = new TreeNode(6)
tree.right.left = new TreeNode(3)

console.log('====================================')
console.log(isValidBST(tree))
console.log('====================================')

export {}
