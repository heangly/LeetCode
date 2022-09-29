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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const ans = []
  const helper = (node, temp) => {
    if (!node) return

    if (!node.left && !node.right) {
      temp.push(node.val)
      ans.push(temp.join('->'))
      return
    }

    temp.push(node.val)
    helper(node.left, [...temp])
    helper(node.right, [...temp])
  }

  helper(root, [])

  return ans
}
