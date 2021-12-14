var rangeSumBST = function (root, low, high) {
  let sum = 0

  const dfs = (root) => {
    if (!root) return
    if (root.val >= low && root.val <= high) {
      sum += root.val
    }

    if (root.val < high) {
      dfs(root.right)
    }

    if (root.val > low) {
      dfs(root.left)
    }
  }

  dfs(root)
  return sum
}
