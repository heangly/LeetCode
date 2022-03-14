class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  const merge = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (!l1 || !l2) return l1! || l2!

    let node = new ListNode()
    const root = node

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        node.next = l1
        l1 = l1.next
      } else {
        node.next = l2
        l2 = l2.next
      }
      node = node.next
    }

    if (l1) node.next = l1
    if (l2) node.next = l2

    return root.next
  }

  let root = lists[0]
  for (let i = 1; i < lists.length; i++) {
    merge(root!, lists[i]!)
  }
  return root || null
}

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6]
]

const arrayLists: ListNode[] = []

for (const list of lists) {
  let listNode = new ListNode()
  let head = listNode
  for (const num of list) {
    listNode.val = num
    listNode.next = new ListNode()
    listNode = listNode.next
  }
  arrayLists.push(head)
}

console.log(mergeKLists(arrayLists))
