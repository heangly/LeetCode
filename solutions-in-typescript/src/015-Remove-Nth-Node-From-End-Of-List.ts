class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  const listNodeLength = getListNodeLength(head)
  const nthNodeToSkipNext = listNodeLength - n

  if (nthNodeToSkipNext === 0) return head?.next ?? null

  let currNode = head
  let counter = 1

  while (currNode) {
    if (counter === nthNodeToSkipNext) {
      currNode.next = currNode.next?.next ?? null
    }

    currNode = currNode.next
    counter++
  }

  return head
}

const getListNodeLength = (node: ListNode | null): number => {
  let ans = 0

  while (node) {
    ans++
    node = node.next
  }

  return ans
}

export {}
