class ListNode5 {
  val: number
  next: ListNode5 | null
  constructor(val?: number, next?: ListNode5 | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reorderList(head: ListNode5 | null): void {
  if (!head || !head.next || !head.next.next) return

  let slow = head
  let fast: ListNode5 | null = head
  while (fast && fast.next) {
    slow = slow!.next!
    fast = fast.next.next
  }

  let second = slow.next
  slow.next = null
  let prev: ListNode | null = null

  while (second) {
    const next = second.next
    second.next = prev
    prev = second
    second = next
  }

  let reversedSecond = prev

  let first: ListNode5 | null = head
  while (reversedSecond) {
    const temp1: ListNode5 | null = first!.next
    const temp2 = reversedSecond.next

    first!.next = reversedSecond
    reversedSecond.next = temp1

    first = temp1
    reversedSecond = temp2
  }
}

const list = new ListNode5(1)
list.next = new ListNode5(2)
list.next.next = new ListNode5(3)
list.next.next.next = new ListNode5(4)
list.next.next.next.next = new ListNode5(5)

console.log(reorderList(list))
