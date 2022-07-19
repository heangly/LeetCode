// https://leetcode.com/problems/snapshot-array/
class SnapshotArray {
  snapId: number
  arr: { [key: string]: number }[]

  // Time: O(n) | Space: O(n)
  constructor(length: number) {
    this.snapId = 0
    this.arr = new Array(length).fill({})

    for (let i = 0; i < length; i++) {
      this.arr[i] = { '0': 0 }
    }
  }

  // Time: O(1) | Space: O(1)
  set(index: number, val: number): void {
    this.arr[index][this.snapId] = val
  }

  // Time: O(1) | Space: O(1)
  snap(): number {
    this.snapId++
    return this.snapId - 1
  }

  // Time: O(n) | Space: O(1)
  get(index: number, snap_id: number): number {
    while (this.arr[index][snap_id] === undefined) snap_id--
    return this.arr[index][snap_id]
  }
}
