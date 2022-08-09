// https://leetcode.com/problems/delete-nodes-and-return-forest/
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

// Time: O(n) | Space: O(n)
const delNodes = (
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> => {
  const set = new Set(to_delete)
  const res: Array<TreeNode | null> = []

  const go = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null

    node.left = go(node.left)
    node.right = go(node.right)

    if (set.has(node.val)) {
      if (node.left) res.push(node.left)
      if (node.right) res.push(node.right)
      return null
    }

    return node
  }

  go(root)
  if (!set.has(root!.val)) res.push(root)

  return res
}

const td = new TreeNode(1)
td.left = new TreeNode(2)
td.left.left = new TreeNode(4)
td.left.right = new TreeNode(5)
td.right = new TreeNode(3)
td.right.left = new TreeNode(6)
td.right.right = new TreeNode(7)

console.log(delNodes(td, [3, 5]))

export {}
