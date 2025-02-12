class MinHeapp {
  private heap: number[] = []
  private capacity: number

  // Time: O(n log(k))
  constructor(arr: number[], k: number) {
    this.capacity = k

    for (const num of arr) {
      this.insert(num)
    }
  }

  // O(log(k))
  insert(num: number) {
    if (this.heap.length < this.capacity) {
      this.heap.push(num)
      this.shiftUp()
    } else if (num > this.heap[0]) {
      this.heap[0] = num
      this.shiftDown()
    }
  }

  shiftUp() {
    let i = this.heap.length - 1
    let parentIdx = Math.floor((i - 1) / 2)

    while (i > 0 && this.heap[i] < this.heap[parentIdx]) {
      this.swap(i, parentIdx)
      i = parentIdx
      parentIdx = Math.floor((i - 1) / 2)
    }
  }

  shiftDown() {
    let i = 0
    let leftChildIdx = 2 * i + 1

    while (leftChildIdx < this.heap.length) {
      let rightChildIdx = 2 * i + 2
      let smallest = leftChildIdx

      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[leftChildIdx]) {
        smallest = rightChildIdx
      }

      if (this.heap[smallest] < this.heap[i]) {
        this.swap(i, smallest)
        i = smallest
        leftChildIdx = 2 * i + 1
      } else {
        break
      }
    }
  }

  getTop(): number {
    return this.heap[0]
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

// Time: O(n log (k)) where n is total length of elemnts and k is the max capacity
// Space: O(k)
class KthLargestt {
  private minHeapp: MinHeapp

  constructor(k: number, nums: number[]) {
    this.minHeapp = new MinHeapp(nums, k)
  }

  add(val: number): number {
    this.minHeapp.insert(val)
    return this.minHeapp.getTop()
  }
}
