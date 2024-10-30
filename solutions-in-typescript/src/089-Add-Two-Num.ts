class ListNode1 {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// Time: O(Max(N, M)) || Space: O(Max(N, M))
function addTwoNumbers(l1: ListNode1 | null, l2: ListNode1 | null): ListNode1 | null {
  let l3 = new ListNode1()
  let head = l3
  let carry = 0

  while (l1 || l2 || carry) {
    let v1 = l1?.val || 0
    let v2 = l2?.val || 0
    const sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    const newVal = sum % 10

    l3.next = new ListNode1(newVal)
    l3 = l3.next

    l1 = l1?.next || null
    l2 = l2?.next || null
  }

  return head.next
}

const list1 = new ListNode1(9)
list1.next = new ListNode1(9)
list1.next.next = new ListNode1(9)

const list2 = new ListNode1(5)
list2.next = new ListNode1(6)
list2.next.next = new ListNode1(4)

const res = addTwoNumbers(list1, list2)
console.log(res)
