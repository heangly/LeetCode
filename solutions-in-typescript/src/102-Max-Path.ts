class TreeNodeC {
  val: number
  left: TreeNodeB | null
  right: TreeNodeB | null
  constructor(val?: number, left?: TreeNodeB | null, right?: TreeNodeB | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// Time: O(N) | Space: O(H) where H is the height of the tree
function maxPathSum(root: TreeNodeC | null): number {
  let max = -Infinity

  const dfs = (tree: TreeNodeC | null): number => {
    if (!tree) return 0

    // Calculate the maximum sum of paths from left and right subtrees
    const left = Math.max(dfs(tree.left), 0) // Ignore negative paths
    const right = Math.max(dfs(tree.right), 0) // Ignore negative paths

    // Update the global max with the sum that includes the current node
    max = Math.max(max, tree.val + left + right)

    // Return the maximum single path that can be extended to the parent
    return tree.val + Math.max(left, right)
  }

  dfs(root)

  return max
}

const treeC = new TreeNodeC(1)
treeC.left = new TreeNodeC(-2)
treeC.right = new TreeNodeC(3)

console.log(maxPathSum(treeC))
