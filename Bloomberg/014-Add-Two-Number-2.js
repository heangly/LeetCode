//https://leetcode.com/problems/add-two-numbers-ii/
// Time: O(n + m) | Space: O(n)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

const reverseLinkedList = (list) => {
  let prev = null
  let curr = list

  while (curr) {
    let temp = curr.next
    curr.next = prev

    prev = curr
    curr = temp
  }

  return prev
}

const addTwoNumbers = (l1, l2) => {
  let curr1 = reverseLinkedList(l1)
  let curr2 = reverseLinkedList(l2)
  let carry = 0
  let prev3 = null
  let curr3 = new ListNode()

  while (curr1 || curr2 || carry > 0) {
    let val = carry

    if (curr1) {
      val += curr1.val
      curr1 = curr1.next
    }

    if (curr2) {
      val += curr2.val
      curr2 = curr2.next
    }

    carry = Math.floor(val / 10)
    val = val % 10

    curr3.val = val
    curr3.next = prev3

    prev3 = curr3
    curr3 = new ListNode()
  }

  return prev3
}

const l1 = new ListNode(7)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)
l1.next.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))
