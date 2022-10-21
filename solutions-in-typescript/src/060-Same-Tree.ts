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

const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

const p = new TreeNode(1)
p.left = new TreeNode(2)
// p.right = new TreeNode(3)

const q = new TreeNode(1)
// q.left = new TreeNode(2)
q.right = new TreeNode(2)

console.log(isSameTree(p, q))

export {}
