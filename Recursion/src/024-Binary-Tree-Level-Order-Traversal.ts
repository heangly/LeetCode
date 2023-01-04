class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

const levelOrder = (root: TreeNode | null): number[][] => {
  const ans: number[][] = []
  if (!root) return ans
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const len = queue.length
    const temp: number[] = []

    for (let i = 0; i < len; i++) {
      const curr = queue.shift()!
      curr.left && queue.push(curr.left)
      curr.right && queue.push(curr.right)
      temp.push(curr.val)
    }

    ans.push(temp)
  }
  return ans
}

const root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log('====================================')
console.log(levelOrder(root))
console.log('====================================')

export {}
