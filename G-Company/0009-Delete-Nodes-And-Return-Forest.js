var delNodes = function (root, to_delete) {
  if (!root) return []

  const res = []
  const helper = (node, isRoot) => {
    if (!node) return

    const isNodeToDeleted = to_delete.includes(node.val)

    if (node.left) node.left = helper(node.left, isNodeToDeleted)
    if (node.right) node.right = helper(node.right, isNodeToDeleted)
    if (isRoot && !isNodeToDeleted) res.push(node)

    return isNodeToDeleted ? null : node
  }

  helper(root, true)
  return res
}
