class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const helper = (left: number, right: number): TreeNode | null => {
    if (left > right) return null
    const midIdx = Math.floor((left + right) / 2)

    const root = new TreeNode(nums[midIdx])
    root.left = helper(left, midIdx - 1)
    root.right = helper(midIdx + 1, right)

    return root
  }

  return helper(0, nums.length - 1)
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

export {}
