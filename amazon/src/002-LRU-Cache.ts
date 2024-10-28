class LRUCache {
  private capacity: number
  private cache: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
  }

  private updatePosition(key: number, val: number): void {
    this.cache.delete(key)
    this.cache.set(key, val)
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const val = this.cache.get(key)!
      this.updatePosition(key, val)
      return val
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.updatePosition(key, value)
      return
    }

    if (this.cache.size > this.capacity) {
      for (const key of this.cache.keys()) {
        this.cache.delete(key)
        break
      }
      this.cache.set(key, value)
    }
  }
}
