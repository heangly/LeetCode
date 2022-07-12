//  https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/

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

const getDirections = (
  root: TreeNode | null,
  startValue: number,
  destValue: number
): string => {
  const LCA = findLCA(root, startValue, destValue)
  const depth = findDepth(LCA, startValue)
  const path = findPath(LCA, destValue)

  return 'U'.repeat(depth).concat(path)
}

const findLCA = (
  node: TreeNode | null,
  value1: number,
  value2: number
): TreeNode | null => {
  if (!node) return null

  if (node.val === value1 || node.val === value2) return node

  const left = findLCA(node.left, value1, value2)
  const right = findLCA(node.right, value1, value2)

  if (left && right) return node

  return left || right
}

const findDepth = (
  node: TreeNode | null,
  val: number,
  count: number = 0
): number => {
  if (!node) return 0
  if (node.val === val) return count
  return (
    findDepth(node.left, val, count + 1) ||
    findDepth(node.right, val, count + 1)
  )
}

const findPath = (node: TreeNode | null, value: number, str = ''): string => {
  if (!node) return ''
  if (node.val === value) return str
  return (
    findPath(node.left, value, str + 'L') ||
    findPath(node.right, value, str + 'R')
  )
}

const tree = new TreeNode(5)
tree.left = new TreeNode(1)
tree.left.left = new TreeNode(3)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(6)
tree.right.right = new TreeNode(4)

console.log(getDirections(tree, 3, 6))
export {}
