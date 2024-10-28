class KthLargest {
  private k: number
  private nums: number[] = []

  // O(logn)
  constructor(k: number, nums: number[]) {
    this.k = k

    for (const num of nums) {
      this.nums.push(num)
      this.shiftUp()
    }

    while (this.nums.length > k) {
      this.remove()
    }
  }

  // O(logn)
  add(val: number): number {
    this.nums.push(val)
    this.shiftUp()

    while (this.nums.length > this.k) {
      this.remove()
    }

    return this.nums[0]
  }

  // O(logn)
  remove() {
    if (!this.nums.length) return
    this.swap(0, this.nums.length - 1)
    this.nums.pop()
    this.shiftDown()
  }

  // O(logn)
  shiftDown() {
    let i = 0
    let leftChildIndex = 2 * i + 1

    while (leftChildIndex < this.nums.length) {
      let smallestChildIndex = leftChildIndex
      const rightChildIndex = 2 * i + 2

      if (rightChildIndex < this.nums.length && this.nums[rightChildIndex] < this.nums[leftChildIndex]) {
        smallestChildIndex = rightChildIndex
      }

      if (this.nums[i] > this.nums[smallestChildIndex]) {
        this.swap(i, smallestChildIndex)
        i = smallestChildIndex
        leftChildIndex = 2 * i + 1
      } else {
        break
      }
    }
  }

  // O(logn)
  shiftUp() {
    let currentIndex = this.nums.length - 1
    let parentIndex = Math.floor((currentIndex - 1) / 2)

    while (currentIndex > 0) {
      const parentValue = this.nums[parentIndex]
      const currentValue = this.nums[currentIndex]

      if (parentValue > currentValue) {
        this.swap(parentIndex, currentIndex)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2)
      } else {
        break
      }
    }
  }

  // O(1)
  swap(i: number, j: number) {
    ;[this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]]
  }
}
