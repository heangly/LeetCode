class ListNode0 {
  val: number
  next: ListNode0 | null
  constructor(val?: number, next?: ListNode0 | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode0 | null): boolean {
  const visited = new Set<ListNode0>()

  while (head) {
    if (visited.has(head)) return true

    visited.add(head)
    head = head.next
  }

  return false
}

const ll1 = new ListNode0(3)
ll1.next = new ListNode0(2)
ll1.next.next = new ListNode0(0)
ll1.next.next.next = new ListNode0(4)
ll1.next.next.next.next = ll1.next

console.log(hasCycle(ll1))
