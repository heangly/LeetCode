// MinHeap is a special kind of Binary Tree that
//   -> each level is filled up from LEFT to RIGHT
//   -> everyNode value is smaller than its children value (bigger for MaxHeap)
//   -> can be used as priority queue
//   -> it is not sorted
//   -> root node is the smallest value in all time
//   -> it can be represented beautifully in the array
//   -> leftChild = (currIdx * 2) + 1
//   -> rightChild = (currIdx * 2) + 2
//   -> parentNode = Math.floor((currIdx  - 1 )/ 2)

class MinHeap {
  heap: number[]

  constructor(array: number[]) {
    this.heap = []
    this.buildHeap(array)
  }

  // Time: O(n) | Space: O(1)
  buildHeap(array: number[]) {
    for (const num of array) {
      this.insert(num)
    }
  }

  // Time: O(log(n)) | Space: O(1)
  siftDown() {
    let currentIdx = 0
    let leftChildIdx = currentIdx * 2 + 1

    while (leftChildIdx < this.heap.length) {
      const rightChildIdx =
        currentIdx * 2 + 2 < this.heap.length ? currentIdx * 2 + 2 : -1

      let childToSwapIdx = leftChildIdx

      if (rightChildIdx !== -1) {
        childToSwapIdx =
          this.heap[leftChildIdx] < this.heap[rightChildIdx]
            ? leftChildIdx
            : rightChildIdx
      }

      if (this.heap[currentIdx] > this.heap[childToSwapIdx]) {
        this.swap(currentIdx, childToSwapIdx)
        currentIdx = childToSwapIdx
        leftChildIdx = currentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  // Time: O(log(n)) | Space: O(1)
  siftUp() {
    let currentNodeIdx = this.heap.length - 1
    let parentNodeIdx = Math.floor((currentNodeIdx - 1) / 2)

    while (
      currentNodeIdx > 0 &&
      this.heap[parentNodeIdx] > this.heap[currentNodeIdx]
    ) {
      this.swap(parentNodeIdx, currentNodeIdx)
      currentNodeIdx = parentNodeIdx
      parentNodeIdx = Math.floor((currentNodeIdx - 1) / 2)
    }
  }

  // Time: O(1) | Space: O(1)
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // Time: O(1) | Space: O(1)
  peek() {
    return this.heap[0] ?? -1
  }

  // Time: O(log(n)) | Space: O(1)
  remove() {
    if (!this.heap.length) return
    if (this.heap.length === 1) return this.heap.pop()

    let rootNodeIdx = 0
    let lastNodeIdx = this.heap.length - 1

    this.swap(rootNodeIdx, lastNodeIdx)
    const removedValue = this.heap.pop()
    this.siftDown()
    return removedValue
  }

  // Time: O(log(n)) | Space: O(1)
  insert(value: number) {
    this.heap.push(value)
    this.siftUp()
  }
}

const minHeap = new MinHeap([
  48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41
])

console.log(minHeap.heap)
