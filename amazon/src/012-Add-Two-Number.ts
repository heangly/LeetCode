// https://leetcode.com/problems/add-two-numbers/

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next?: ListNode) {
    this.val = val
    this.next = next ?? null
  }
}

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let l3 = new ListNode(0)
  let head = l3
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = 0

    if (l1 && l2) {
      sum = l1.val + l2.val
    } else if (l1) {
      sum = l1.val
    } else if (l2) {
      sum = l2.val
    }

    sum += carry

    carry = Math.floor(sum / 10)
    const value = sum % 10

    l1 &&= l1.next
    l2 &&= l2.next

    l3.val = value

    if (carry || l1 || l2) {
      l3.next = new ListNode(0)
      l3 = l3.next
    }
  }

  return head
}

export {}
