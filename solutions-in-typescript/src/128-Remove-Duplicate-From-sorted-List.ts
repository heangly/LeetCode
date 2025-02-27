/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

//  Time: O(N) | Space: O(1)
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null

  let curr: ListNode | null = head

  while (curr) {
    let next: ListNode | null = curr.next

    while (next?.val === curr.val) {
      next = next.next
    }

    curr.next = next
    curr = curr.next
  }

  return head
}
