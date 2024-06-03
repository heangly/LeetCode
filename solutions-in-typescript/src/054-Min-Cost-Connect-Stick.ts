class Heap5 {
  private heap: number[] = []

  // O(nlogn)
  constructor(arr: number[]) {
    for (const num of arr) {
      this.add(num)
    }
  }

  // O(logn)
  add(num: number) {
    this.heap.push(num)
    this.shiftUp()
  }

  // O(logn)
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2)
  }

  // O(1)
  getLeftChildIndex(i: number) {
    return 2 * i + 1
  }

  // O(1)
  getRightChildIndex(i: number) {
    return 2 * i + 2
  }

  // O(logn)
  shiftUp() {
    let currIndex = this.heap.length - 1
    let parentIndex = this.getParentIndex(currIndex)

    while (currIndex > 0) {
      const parentValue = this.heap[parentIndex]
      const currValue = this.heap[currIndex]

      if (currValue < parentValue) {
        this.swap(currIndex, parentIndex)
        currIndex = parentIndex
        parentIndex = this.getParentIndex(currIndex)
      } else {
        break
      }
    }
  }

  // O(logn)
  shiftDown() {
    let currIndex = 0
    let leftChildIndex = this.getLeftChildIndex(currIndex)

    while (leftChildIndex < this.heap.length) {
      let smallestChildIndex = leftChildIndex
      const rightChildIndex = this.getRightChildIndex(currIndex)

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallestChildIndex = rightChildIndex
      }

      if (this.heap[currIndex] > this.heap[smallestChildIndex]) {
        this.swap(smallestChildIndex, currIndex)
        currIndex = smallestChildIndex
        leftChildIndex = this.getLeftChildIndex(currIndex)
      } else {
        break
      }
    }
  }

  // O(logn)
  remove() {
    let i = 0
    let j = this.heap.length - 1
    this.swap(i, j)
    const value = this.heap.pop()!
    this.shiftDown()
    return value
  }

  // O(1)
  peek() {
    return this.heap[0]
  }

  // O(1)
  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // O(1)
  getLength() {
    return this.heap.length
  }
}

// Time: O(n(log(n))) | Space: O(n)
function connectSticks(sticks: number[]): number {
  let finalCost = 0
  if (sticks.length <= 1) return finalCost
  const heap = new Heap5(sticks)

  while (heap.getLength() >= 2) {
    const v1 = heap.remove()
    const v2 = heap.remove()
    const sum = v1 + v2
    heap.add(sum)
    finalCost += sum
  }

  return finalCost
}
