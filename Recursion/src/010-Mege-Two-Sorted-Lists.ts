// https://leetcode.com/problems/merge-two-sorted-lists/description/

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (!list1 || !list2) return list1 ? list1 : list2
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

console.log(mergeTwoLists(l1, l2))
