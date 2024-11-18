class TreeNodeB {
  val: number
  left: TreeNodeB | null
  right: TreeNodeB | null
  constructor(val?: number, left?: TreeNodeB | null, right?: TreeNodeB | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function buildTree(preorder: number[], inorder: number[]): TreeNodeB | null {
  if (preorder.length === 0 || inorder.length === 0) return null

  const rootVal = preorder[0]
  const root = new TreeNodeB(rootVal)

  const rootIndex = inorder.indexOf(rootVal)

  const inorderLeft = inorder.slice(0, rootIndex)
  const inorderRight = inorder.slice(rootIndex + 1)

  const preorderLeft = preorder.slice(1, inorderLeft.length + 1)
  const preorderRight = preorder.slice(inorderLeft.length + 1)

  root.left = buildTree(preorderLeft, inorderLeft)
  root.right = buildTree(preorderRight, inorderRight)

  return root
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
