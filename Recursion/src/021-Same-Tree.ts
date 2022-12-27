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
  const stack: (TreeNode | null)[] = [p, q]

  while (stack.length) {
    const t1 = stack.pop()
    const t2 = stack.pop()

    if (!t1 && !t2) continue
    if (!t1 || !t2) return false
    if (t1.val !== t2.val) return false

    stack.push(t1.left, t2.left)
    stack.push(t1.right, t2.right)
  }

  return true
}

const p = new TreeNode(0)
p.left = new TreeNode(-5)
const q = new TreeNode(0)
q.left = new TreeNode(-8)

console.log('====================================')
console.log(isSameTree(p, q))
console.log('====================================')
export {}
