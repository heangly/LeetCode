const findLeaves = (root) => {
  const res = {}
  dfs(root, res)
  return Object.values(res)
}

const dfs = (node, res) => {
  if (!node) return 0
  const depth = Math.max(dfs(node.left, res), dfs(node.right, res))
  if (res[depth]) {
    res[depth].push(node.val)
  } else {
    res[depth] = [node.val]
  }
  return depth + 1
}
