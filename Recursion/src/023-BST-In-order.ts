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

const inorderTraversal = (root: TreeNode | null): number[] => {
  const ans: number[] = []
  const stacks: TreeNode[] = []
  let curr = root

  while (curr || stacks.length) {
    while (curr) {
      stacks.push(curr)
      curr = curr.left
    }

    curr = stacks.pop()!
    ans.push(curr.val)
    curr = curr.right
  }

  return ans
}

const tree = new TreeNode(1)
tree.left = new TreeNode(0)
tree.right = new TreeNode(2)
tree.right.left = new TreeNode(3)

console.log('====================================')
console.log(inorderTraversal(tree))
console.log('====================================')

export {}
