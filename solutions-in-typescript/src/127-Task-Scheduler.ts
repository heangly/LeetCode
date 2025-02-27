type Task = [string, number]

class MaxHeap {
  private heap: Task[]

  constructor(arr: Task[]) {
    this.heap = []

    for (const element of arr) {
      this.insert(element)
    }
  }

  insert(element: Task) {
    this.heap.push(element)
    this.shiftUp()
  }

  shiftUp() {
    let i = this.heap.length - 1
    let parent = Math.floor((i - 1) / 2)

    while (i < 0 && this.heap[i][1] > this.heap[parent][1]) {
      this.swap(i, parent)
      i = parent
      parent = Math.floor((i - 1) / 2)
    }
  }

  shiftDown() {
    let i = 0
    let leftChild = 2 * i + 1

    while (leftChild < this.heap.length) {
      let childToSwap = leftChild
      const rightChild = 2 * i + 2

      if (rightChild < this.heap.length && this.heap[rightChild][1] > this.heap[leftChild][1]) {
        childToSwap = rightChild
      }

      if (this.heap[childToSwap][1] > this.heap[i][1]) {
        this.swap(i, childToSwap)
        i = childToSwap
        leftChild = 2 * i + 1
      } else {
        break
      }
    }
  }

  remove() {
    this.swap(0, this.heap.length - 1)
    const val = this.heap.pop()!
    this.shiftDown()
    return val
  }

  peek() {
    return this.heap[0]
  }

  swap(i: number, j: number) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  len(): number {
    return this.heap.length
  }
}

function leastInterval(tasks: string[], n: number): number {
  let i = 0
  const res: string[] = []
  const table: Record<string, number> = {}

  for (const task of tasks) {
    table[task] = (table[task] || 0) + 1
  }

  const maxHeap = new MaxHeap(Object.entries(table))

  while (maxHeap.len) {
    const pair = maxHeap.remove()
    if (pair[1] <= 0) continue

    const prevPosition = Math.abs(i - n)

    // can insert
    if (prevPosition < 0 || res[prevPosition] !== pair[0]) {
      res.push(pair[0])
      pair[1]--
      maxHeap.insert(pair)
    } else {
      break
    }
  }

  return res.length
}
