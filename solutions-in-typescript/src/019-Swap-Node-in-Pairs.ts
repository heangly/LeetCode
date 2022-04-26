class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  let cur = head
  const newHead = head?.next ?? head

  while (cur && cur?.next) {
    let next = cur.next
    let temp = next.next

    next.next = cur
    cur.next = temp?.next ?? temp

    cur = temp
  }

  return newHead
}

const linkedList = new ListNode(1)
linkedList.next = new ListNode(2)
linkedList.next.next = new ListNode(3)
linkedList.next.next.next = new ListNode(4)

console.log(swapPairs(linkedList))

export {}
