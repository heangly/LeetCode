class MyHashSet {
  data: Record<string, boolean> = {}

  constructor() {
    this.data = {}
  }

  add(key: number): void {
    this.data[key] = true
  }

  remove(key: number): void {
    if (key in this.data) {
      delete this.data[key]
    }
  }

  contains(key: number): boolean {
    return this.data[key] ?? false
  }
}
