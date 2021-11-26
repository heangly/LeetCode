/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  const table = {}
  let maxValue = [-Infinity]
  dfs(root, table, maxValue)
  const arr = []

  for (const key in table) {
    if (table[key] === maxValue[0]) {
      arr.push(key)
    }
  }

  return arr
}

const dfs = (root, table, maxValue) => {
  if (!root) return

  table[root.val] = (table[root.val] || 0) + 1

  if (table[root.val] > maxValue[0]) {
    maxValue[0] = table[root.val]
  }

  dfs(root.left, table, maxValue)
  dfs(root.right, table, maxValue)
}
