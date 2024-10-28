//  Definition for singly-linked list.
class ListNode2 {
  val: number
  next: ListNode2 | null
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// Time: O(l1 + l2) | Space : O(l1 + l2)
function mergeTwoLists(list1: ListNode2 | null, list2: ListNode2 | null): ListNode2 | null {
  let head = new ListNode2()
  const output = head

  while (list1 && list2) {
    if (list1.val < list2.val) {
      head.next = list1
      list1 = list1.next
    } else {
      head.next = list2
      list2 = list2.next
    }
    head = head.next
  }

  head.next = list1 || list2

  return output.next
}

const l1 = new ListNode2(1)
l1.next = new ListNode2(2)
l1.next.next = new ListNode2(4)

const l2 = new ListNode2(1)
l2.next = new ListNode2(3)
l2.next.next = new ListNode2(4)

let val = mergeTwoLists(l1, l2)
while (val) {
  console.log(val.val)
  val = val.next
}
