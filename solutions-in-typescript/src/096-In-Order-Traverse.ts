class TreeNode6 {
  val: number
  left: TreeNode6 | null
  right: TreeNode6 | null
  constructor(val?: number, left?: TreeNode6 | null, right?: TreeNode6 | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(N)
function levelOrder(root: TreeNode6 | null): number[][] {
  const ans: number[][] = []

  const helper = (tree: TreeNode6 | null, level: number) => {
    if (!tree) return

    if (!ans[level]) {
      ans[level] = []
    }

    ans[level].push(tree.val)

    helper(tree.left, level + 1)
    helper(tree.right, level + 1)
  }

  helper(root, 0)

  return ans
}

const node6 = new TreeNode6(3)
node6.left = new TreeNode6(9)
node6.right = new TreeNode6(20)
node6.right.left = new TreeNode6(15)
node6.right.right = new TreeNode6(7)

console.log(levelOrder(node6))
