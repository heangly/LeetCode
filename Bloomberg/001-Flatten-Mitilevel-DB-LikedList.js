// https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/

/**
 * travese through each node (starting from head)
 * check if the child point to any node?
 * if not PAUSE the main traversal
 * BEGIN another traversal with child point to the next node
 * if NEXT === NULL
 * END the sub traversal and CONTINUE to MAIN traversal
 *
 *
 */

class Node {
  constructor(val, prev, next, child) {
    this.val = val
    this.prev = prev
    this.next = next
    this.child = child
  }
}

// Time: O(n) | Space: O(n)
const flatten = (head) => {
  if (!head) return head
  const stack = []
  let curr = head

  while (curr) {
    if (curr.child) {
      curr.next && stack.push(curr.next)
      curr.next = curr.child
      curr.child.prev = curr
      curr.child = null
    } else if (!curr.next && stack.length > 0) {
      curr.next = stack.pop()
      curr.next.prev = curr
    }

    curr = curr.next
  }

  return head
}
