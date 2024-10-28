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

// Time: O(N) | Space: O(log(h)) where h is the height of the tree
function invertTree(root: TreeNode | null): TreeNode | null {
  dfs1(root)
  return root
}

const dfs1 = (tree: TreeNode | null) => {
  if (!tree) return
  ;[tree.left, tree.right] = [tree.right, tree.left]
  dfs1(tree.left)
  dfs1(tree.right)
}
