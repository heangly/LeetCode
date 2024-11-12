class TreeNode7 {
  val: number
  left: TreeNode7 | null
  right: TreeNode7 | null
  constructor(val?: number, left?: TreeNode7 | null, right?: TreeNode7 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(N)
function rightSideView(root: TreeNode7 | null): number[] {
  const ans: number[] = []

  const helper = (tree: TreeNode7 | null, level: number) => {
    if (!tree) return

    if (ans.length === level) {
      ans.push(tree.val)
    }

    helper(tree.right, level + 1)
    helper(tree.left, level + 1)
  }

  helper(root, 0)

  return ans
}
