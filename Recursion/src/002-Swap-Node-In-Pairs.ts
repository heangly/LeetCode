// https://leetcode.com/problems/swap-nodes-in-pairs/

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

const swapParis = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head

  let first = head
  let second = head.next

  first.next = swapParis(second.next)
  second.next = first

  return second
}

// const swapParis = (head: ListNode | null): ListNode | null => {
//   let temp = new ListNode()
//   temp.next = head
//   let ans = temp

//   while (temp.next && temp.next.next) {
//     let first = temp.next
//     let second = temp.next.next

//     temp.next = second
//     first.next = second.next
//     second.next = first

//     temp = first
//   }

//   return ans.next
// }

const ll = new ListNode(1)
ll.next = new ListNode(2)
ll.next.next = new ListNode(3)
ll.next.next.next = new ListNode(4)

console.log(swapParis(ll))
