class ListNode {
  value: number
  next: ListNode | null

  constructor(value?: number, next?: ListNode | null) {
    this.value = value ?? 0
    this.next = next ?? null
  }
}

const rotateRight = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next) return head
  let length = 1
  let dummy = head

  while (dummy.next) {
    length++
    dummy = dummy.next
  }

  dummy.next = head

  k = k % length

  for (let i = 0; i < length - k; i++) {
    dummy = dummy.next!
  }

  head = dummy.next

  dummy.next = null
  return head
}

const ll1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)
const ll2 = new ListNode(0, new ListNode(1, new ListNode(2)))

export {}
