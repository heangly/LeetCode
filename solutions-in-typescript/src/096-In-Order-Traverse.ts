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
  if (!root) return []

  const bfsArray = [root]
  const ans: number[][] = []

  while (bfsArray.length) {
    const levelSize = bfsArray.length
    const temp: number[] = []

    for (let i = 0; i < levelSize; i++) {
      const currNode = bfsArray.shift()!

      temp.push(currNode.val)

      if (currNode.left) {
        bfsArray.push(currNode.left)
      }

      if (currNode.right) {
        bfsArray.push(currNode.right)
      }
    }

    ans.push(temp) // Add the current level to the result
  }

  return ans
}

const node6 = new TreeNode6(3)
node6.left = new TreeNode6(9)
node6.right = new TreeNode6(20)
node6.right.left = new TreeNode6(15)
node6.right.right = new TreeNode6(7)

console.log(levelOrder(node6))
