class ListNode6 {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// Time: O(n) | Space: O(1)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode6 | null {
  let prev = head
  let curr = head
  let count = 0
  let len = 0

  while (curr) {
    curr = curr.next

    if (count > n) {
      prev = prev!.next
    }

    count++
    len++
  }

  if (len === n) return head!.next

  if (prev) {
    prev.next = prev?.next?.next || null
  }

  return head
}

const node = new ListNode6(1)
node.next = new ListNode6(2)
node.next.next = new ListNode6(3)
node.next.next.next = new ListNode6(4)
node.next.next.next.next = new ListNode6(5)

console.log(removeNthFromEnd(node, 2))
