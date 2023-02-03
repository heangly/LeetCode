class MyHashSet {
  private table: Set<number>

  constructor() {
    this.table = new Set()
  }

  add(key: number): void {
    this.table.add(key)
  }

  remove(key: number): void {
    this.table.delete(key)
  }

  contains(key: number): boolean {
    return this.table.has(key)
  }
}

const myHashSet = new MyHashSet()

myHashSet.add(1)
console.log(myHashSet)
myHashSet.add(2)
console.log(myHashSet)
console.log(myHashSet.contains(1))
console.log(myHashSet.contains(3))
console.log(myHashSet)
myHashSet.add(2)
console.log(myHashSet)
console.log(myHashSet.contains(2)) // return True
console.log(myHashSet)
myHashSet.remove(2) // set = [1]
console.log(myHashSet.contains(2)) // return False, (already removed)
console.log(myHashSet)
