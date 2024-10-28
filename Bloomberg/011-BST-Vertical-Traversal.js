//https://leetcode.com/problems/binary-tree-vertical-order-traversal/
// Time: O(w * nlog(n)) | Space:O(n)
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const verticalOrder = (root) => {
  const table = {}

  const helper = (root, i, j) => {
    if (!root) return

    if (j.toString() in table) {
      table[j].push([i, root.val])
    } else {
      table[j] = [[i, root.val]]
    }

    helper(root.left, i + 1, j - 1)
    helper(root.right, i + 1, j + 1)
  }

  helper(root, 0, 0)
  const sortedKeys = Object.keys(table).sort((a, b) => a - b)

  return sortedKeys.map((key) =>
    table[key].sort((a, b) => a[0] - b[0]).map((el) => el[1])
  )
}

const treeNode = new TreeNode(3)
treeNode.left = new TreeNode(9)
treeNode.left.left = new TreeNode(4)
treeNode.left.right = new TreeNode(0)
treeNode.left.right.left = new TreeNode(5)
treeNode.right = new TreeNode(8)
treeNode.right.left = new TreeNode(1)
treeNode.right.right = new TreeNode(7)
treeNode.right.left.right = new TreeNode(2)

console.log(verticalOrder(treeNode))
