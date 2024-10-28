//https://leetcode.com/problems/reverse-linked-list/solution/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const reverseList = (head: ListNode | null): ListNode | null => {
  let pre = null
  while (head) {
    const next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}

const ll = new ListNode(1)
ll.next = new ListNode(2)
ll.next.next = new ListNode(3)
ll.next.next.next = new ListNode(4)
ll.next.next.next.next = new ListNode(5)

console.log(reverseList(ll))

export {}
