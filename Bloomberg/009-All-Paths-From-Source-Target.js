// https://leetcode.com/problems/all-paths-from-source-to-target/
// Time: O(2^n *n) | Space: O(n)
const allPathsSourceTarget = (graph) => {
  const ans = []

  const helper = (startNode, tempArr) => {
    if (startNode === graph.length - 1) {
      ans.push(tempArr)
      return
    }

    for (const nextNode of graph[startNode]) {
      helper(nextNode, tempArr.concat(nextNode))
    }
  }

  helper(0, [0])
  return ans
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]))
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]))
