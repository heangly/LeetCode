class TreeNodeA {
  val: number
  left: TreeNodeA | null
  right: TreeNodeA | null
  constructor(val?: number, left?: TreeNodeA | null, right?: TreeNodeA | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(H) Where H is the height of the tree
function kthSmallest2(root: TreeNodeA | null, k: number): number {
  const ans: number[] = []

  const helper = (tree: TreeNode | null) => {
    if (!tree) return
    if (ans.length === k) return

    helper(tree.left)
    ans.push(tree.val)
    helper(tree.right)
  }

  helper(root)

  return ans[k - 1]
}
