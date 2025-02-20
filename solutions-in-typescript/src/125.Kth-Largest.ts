class MaxHeap5 {
  private heap: number[]

  // nLog(n) where n is the length of arr and log n for for insert
  constructor(arr: number[]) {
    this.heap = []
    for (const num of arr) {
      this.insert(num)
    }
  }

  // log(n)
  insert(num: number) {
    this.heap.push(num)
    this.shiftUp()
  }

  // log(n)
  shiftUp() {
    let i = this.heap.length - 1
    let parent = Math.floor((i - 1) / 2)

    while (i > 0 && this.heap[i] > this.heap[parent]) {
      this.swap(i, parent)
      i = parent
      parent = Math.floor((i - 1) / 2)
    }
  }

  // log(n)
  shiftDown() {
    let i = 0
    let leftChild = 2 * i + 1

    while (leftChild < this.heap.length) {
      const rightChild = 2 * i + 2
      let childToSwap = leftChild

      if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[leftChild]) {
        childToSwap = rightChild
      }

      if (this.heap[childToSwap] > this.heap[i]) {
        this.swap(childToSwap, i)
        i = childToSwap
        leftChild = 2 * i + 1
      } else {
        break
      }
    }
  }

  // log(n)
  remove() {
    this.swap(0, this.heap.length - 1)
    const value = this.heap.pop()
    this.shiftDown()
    return value
  }

  // log(1)
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // log(1)
  peek() {
    return this.heap[0]
  }
}

// Time: O(n(log(n)))
// Space: O(n) where n is the length of nums
function findKthLargest(nums: number[], k: number): number {
  const maxHeap5 = new MaxHeap5(nums)
  let i = 1

  while (i < k) {
    maxHeap5.remove()
    i++
  }

  return maxHeap5.peek()
}
