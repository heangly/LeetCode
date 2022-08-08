//leetcode.com/problems/find-leaves-of-binary-tree/
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

// Time: O(nlog(n)) | Space: O(n)
const findLeaves = (root: TreeNode | null): number[][] => {
  const table: { [key: string]: number[] } = {}

  const dfs = (node: TreeNode | null | undefined): number => {
    if (!node) return -1
    const height = 1 + Math.max(dfs(node?.left), dfs(node?.right))

    if (height in table) {
      table[height].push(node.val)
    } else {
      table[height] = [node.val]
    }

    return height
  }

  dfs(root)

  return Object.values(table)
}

const node = new TreeNode(1)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.left.left = new TreeNode(4)
node.left.right = new TreeNode(5)

console.log(findLeaves(node))

export {}
