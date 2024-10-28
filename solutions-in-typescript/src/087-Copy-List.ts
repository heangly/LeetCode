class ListNode3 {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function copyRandomList(head: ListNode3 | null): ListNode3 | null {
  return null
}
