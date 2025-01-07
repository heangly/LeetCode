// https://stackfull.dev/heaps-in-javascript
// heap must be COMPLETE binary tree (2 children) (fill from left to right) except the last layer.
// left child = 2i + 1
// right child = 2i + 2
// parent = (i-1)/2

// min heap
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.

// Time: O(n * log(k))

export class MinHeap {
  heap: number[]

  constructor(array: number[]) {
    this.heap = []
    this.buildHeap(array)
  }

  // O(N) NOT O(log(n))
  buildHeap(array: number[]) {
    for (const element of array) {
      this.insert(element)
    }
  }

  // O(log(n))
  siftDown() {
    let currIndex = 0
    let leftChildIndex = 2 * currIndex + 1

    while (leftChildIndex < this.heap.length) {
      const rightChildIndex = 2 * currIndex + 2
      let minChildIndex = leftChildIndex

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        minChildIndex = rightChildIndex
      }

      if (this.heap[currIndex] > this.heap[minChildIndex]) {
        this.swap(currIndex, minChildIndex)
        currIndex = minChildIndex
        leftChildIndex = 2 * currIndex + 1
      } else {
        break
      }
    }
  }

  // O(log(n))
  siftUp() {
    let currentIdx = this.heap.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)

    while (currentIdx > 0 && this.heap[parentIdx] > this.heap[currentIdx]) {
      this.swap(currentIdx, parentIdx)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }

  // O(1)
  peek() {
    // Write your code here.
    return this.heap[0]
  }

  // O(log(n))
  remove() {
    // Write your code here.
    this.swap(0, this.heap.length - 1)
    const removedValue = this.heap.pop()!
    this.siftDown()
    return removedValue
  }

  // O(log(n))
  insert(value: number) {
    this.heap.push(value)
    this.siftUp()
  }

  // O(1)
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

const minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41])
console.log(minHeap.heap)
