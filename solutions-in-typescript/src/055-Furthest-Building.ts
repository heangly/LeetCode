class MinHeap {
  private heap: number[] = []

  add(num: number) {
    this.heap.push(num)
    this.shiftUp()
  }

  remove() {
    if (this.heap.length === 0) return null
    this.swap(0, this.heap.length - 1)
    const value = this.heap.pop()
    this.shiftDown()
    return value
  }

  shiftUp() {
    let idx = this.heap.length - 1
    let parentIdx = Math.floor((idx - 1) / 2)

    while (idx > 0 && this.heap[idx] < this.heap[parentIdx]) {
      this.swap(idx, parentIdx)
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
    }
  }

  shiftDown() {
    let idx = 0
    let leftChildIdx = 2 * idx + 1

    while (leftChildIdx < this.heap.length) {
      let smallestChildIdx = leftChildIdx
      let rightChildIdx = 2 * idx + 2

      if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] < this.heap[leftChildIdx]) {
        smallestChildIdx = rightChildIdx
      }

      if (this.heap[idx] <= this.heap[smallestChildIdx]) break

      this.swap(idx, smallestChildIdx)
      idx = smallestChildIdx
      leftChildIdx = 2 * idx + 1
    }
  }

  peek() {
    return this.heap[0]
  }

  len() {
    return this.heap.length
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

// Time: O(n(log(k))) | Space: O(k)
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
  const minHeap = new MinHeap() // Initialize a min-heap to keep track of the largest jumps

  for (let i = 0; i < heights.length - 1; i++) {
    // Loop through the building heights
    const diff = heights[i + 1] - heights[i] // Calculate the difference between consecutive buildings

    if (diff > 0) {
      // If the next building is taller
      minHeap.add(diff) // Add the difference to the heap

      if (minHeap.len() > ladders) {
        // If the number of jumps exceeds the number of ladders
        const smallestDiff = minHeap.remove()!
        // Use bricks for the smallest jump in the heap
        if (bricks >= smallestDiff) {
          // If we have enough bricks to cover this jump
          bricks -= smallestDiff // Deduct the bricks used
        } else {
          // If we don't have enough bricks
          return i // Return the current index as we can't move further
        }
      }
    }
  }

  return heights.length - 1 // If the loop completes, return the last building index
}
