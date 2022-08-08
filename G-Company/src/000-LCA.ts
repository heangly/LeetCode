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

export {}
