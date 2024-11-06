class TreeNode2 {
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
function isBalanced(root: TreeNode2 | null): boolean {
  return checkHeight(root) !== -1
}

const checkHeight = (node: TreeNode2 | null): number => {
  if (!node) return 0

  const left = checkHeight(node.left)
  if (left === -1) return -1

  const right = checkHeight(node.right)
  if (right === -1) return -1

  const diff = Math.abs(left - right)
  if (diff > 1) return -1

  return 1 + Math.max(left, right)
}

const tree1 = new TreeNode2(3)
tree1.left = new TreeNode2(9)
tree1.right = new TreeNode2(20)
tree1.right.left = new TreeNode2(15)
tree1.right.right = new TreeNode2(7)

console.log(isBalanced(tree1))
