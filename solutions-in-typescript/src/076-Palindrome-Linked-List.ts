class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const isPalindrome = (head: ListNode | null): boolean => {
  const arr: number[] = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  let i = 0
  let j = arr.length - 1

  while (i <= j) {
    if (arr[i] !== arr[j]) return false
    i++
    j--
  }

  return true
}

const listNode = new ListNode(1)
listNode.next = new ListNode(2)
// listNode.next.next = new ListNode(2)
// listNode.next.next.next = new ListNode(1)

console.log('====================================')
console.log(isPalindrome(listNode))
console.log('====================================')

export {}
