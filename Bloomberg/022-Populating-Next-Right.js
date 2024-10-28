// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}

const connect = (root) => {
  if (!root) return root
  const table = {}

  const helper = (node, row) => {
    if (!node) return

    if (row in table) {
      table[row].push(node)
    } else {
      table[row] = [node]
    }

    helper(node.left, row + 1)
    helper(node.right, row + 1)
  }

  let curr = root
  helper(curr, 0)

  for (const key in table) {
    for (let i = 0; i < table[key].length - 1; i++) {
      const currNode = table[key][i]
      const nextNode = table[key][i + 1]
      currNode.next = nextNode
    }
  }

  return root
}

const tree = new Node(1)
tree.left = new Node(2)
tree.left.left = new Node(4)
tree.left.right = new Node(5)
tree.right = new Node(3)
tree.right.right = new Node(7)

console.log(connect(tree))
