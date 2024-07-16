// Time: O(1) | Space: O(N)
class MinStack {
  private stack: { val: number; min: number }[] = []

  constructor() {
    this.stack = []
  }

  push(val: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val, min: val })
    } else {
      const min = Math.min(this.getMin(), val)
      this.stack.push({ val, min })
    }
  }

  pop(): void {
    this.stack.pop()
  }

  top(): number {
    return this.stack[this.stack.length - 1].val
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min
  }
}
