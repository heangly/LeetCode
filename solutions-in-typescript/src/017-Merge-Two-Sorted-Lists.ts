class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// Time: O(l1 + l2) | Space: O(l1 + l2)
const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let l3 = new ListNode()
  const l3Head = l3

  while (list1 && list2) {
    if (list1.val < list2.val) {
      l3.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      l3.next = new ListNode(list2.val)
      list2 = list2.next
    }

    l3 = l3.next
  }

  if (list1) {
    l3.next = list1
  } else if (list2) {
    l3.next = list2
  }

  return l3Head.next
}

const l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(4)

const l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

console.log(mergeTwoLists(l1, l2))

export {}
