// https://leetcode.com/problems/unique-binary-search-trees-ii/description/
/**
 *    const nums = [1, 2, 3]
 *
 *  [1, 2, 3]
 *
 *
 *                     1                  2                    3
 *                  / / \ \
 *                 2  3  2 3
 *
 *
 *
 *
 *
 */

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

const generateTrees = (n: number): Array<TreeNode | null> => {
  const helper = (start: number, end: number) => {
    if (start > end) return [null]

    const allTrees: Array<TreeNode | null> = []

    for (let i = start; i <= end; i++) {
      const leftTree = helper(start, i - 1)
      const rightTree = helper(i + 1, end)

      for (const left of leftTree) {
        for (const right of rightTree) {
          const currentTree = new TreeNode(i)
          currentTree.left = left
          currentTree.right = right

          allTrees.push(currentTree)
        }
      }
    }

    return allTrees
  }
  return n === 0 ? [] : helper(1, n)
}

console.log(generateTrees(3))

export {}
