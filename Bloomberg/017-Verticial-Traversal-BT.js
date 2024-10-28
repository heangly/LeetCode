class TreeNode {
  constructor(val, left, right) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}
//https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
// Time: O(h * 2(nlog(n))) where h is the height of BST | Space: O(n)
const vericalTraversal = (root) => {
  const table = {}
  const output = []

  const dfs = (tree, rowPosition, colPosition) => {
    if (!tree) return

    dfs(tree.left, rowPosition + 1, colPosition - 1)

    if (colPosition in table) {
      table[colPosition].push([rowPosition, tree.val])
    } else {
      table[colPosition] = [[rowPosition, tree.val]]
    }

    dfs(tree.right, rowPosition + 1, colPosition + 1)
  }

  dfs(root, 0, 0)

  const sortedKeys = Object.keys(table).sort((a, b) => a - b)

  for (const key of sortedKeys) {
    const sortByRowArray = table[key].sort((a, b) => a[0] - b[0] || a[1] - b[1])
    const arr = sortByRowArray.map((element) => element[1])
    output.push(arr)
  }

  return output
}

const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.left = new TreeNode(0)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)
tree.right.left = new TreeNode(2)

console.log(vericalTraversal(tree))
