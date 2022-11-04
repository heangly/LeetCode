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

const isSymmetric = (root: TreeNode | null): boolean => {
  return isMirror(root, root)
}

// Time: O(n) | space: O(n)
const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
  if (!t1 && !t2) return true
  if (!t1 || !t2) return false
  return (
    t1.val === t2.val &&
    isMirror(t1.right, t2.left) &&
    isMirror(t1.left, t2.right)
  )
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(3)
tree.left.right = new TreeNode(4)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(4)
tree.right.right = new TreeNode(3)

console.log('====================================')
console.log(isSymmetric(tree))
console.log('====================================')

export {}
