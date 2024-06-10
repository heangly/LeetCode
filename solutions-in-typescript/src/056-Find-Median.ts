class MedianFinder {
  private maxHeap: number[] = [] // Max-heap for the smaller half
  private minHeap: number[] = [] // Min-heap for the larger half

  constructor() {}

  private swap(heap: number[], i: number, j: number) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }

  private shiftUp(heap: number[], comparator: (a: number, b: number) => boolean) {
    let j = heap.length - 1
    let i = Math.floor((j - 1) / 2)
    while (j > 0 && comparator(heap[j], heap[i])) {
      this.swap(heap, i, j)
      j = i
      i = Math.floor((j - 1) / 2)
    }
  }

  private shiftDown(heap: number[], comparator: (a: number, b: number) => boolean) {
    let i = 0
    let j = 2 * i + 1
    while (j < heap.length) {
      if (j + 1 < heap.length && comparator(heap[j + 1], heap[j])) {
        j++
      }
      if (comparator(heap[j], heap[i])) {
        this.swap(heap, i, j)
        i = j
        j = 2 * i + 1
      } else {
        break
      }
    }
  }

  private maxHeapComparator(a: number, b: number) {
    return a > b
  }

  private minHeapComparator(a: number, b: number) {
    return a < b
  }

  addNum(num: number): void {
    // Add to max-heap
    if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
      this.maxHeap.push(num)
      this.shiftUp(this.maxHeap, this.maxHeapComparator)
    } else {
      this.minHeap.push(num)
      this.shiftUp(this.minHeap, this.minHeapComparator)
    }

    // Balance the heaps
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap[0])
      this.shiftUp(this.minHeap, this.minHeapComparator)
      this.swap(this.maxHeap, 0, this.maxHeap.length - 1)
      this.maxHeap.pop()
      this.shiftDown(this.maxHeap, this.maxHeapComparator)
    } else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.push(this.minHeap[0])
      this.shiftUp(this.maxHeap, this.maxHeapComparator)
      this.swap(this.minHeap, 0, this.minHeap.length - 1)
      this.minHeap.pop()
      this.shiftDown(this.minHeap, this.minHeapComparator)
    }
  }

  findMedian(): number {
    if (this.maxHeap.length > this.minHeap.length) {
      return this.maxHeap[0]
    } else {
      return (this.maxHeap[0] + this.minHeap[0]) / 2
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
