class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// Time: O(n + m) where n is length of l1 and m is length of l2 | Space: O(n)
const addTowNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode => {
  let l3 = new ListNode()
  let head = l3
  let carry = 0

  while (l1 || l2 || carry) {
    if (l1) {
      carry += l1.val
      l1 = l1.next
    }

    if (l2) {
      carry += l2.val
      l2 = l2.next
    }

    let newValue = carry % 10
    carry = Math.floor(carry / 10)

    l3.next = new ListNode(newValue)
    l3 = l3.next
  }

  return head.next!
}

export {}
