// Time: O(n) | Space: O(n)
class TimeMap {
  private map: { [key: string]: { value: string; timestamp: number }[] }

  constructor() {
    this.map = {}
  }

  set(key: string, value: string, timestamp: number): void {
    this.map[key] = this.map[key] || []
    this.map[key].push({ timestamp, value })
  }

  get(key: string, timestamp: number): string {
    const arr = this.map[key]
    if (!arr) return ''
    let output = ''

    let left = 0
    let right = arr.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const { timestamp: time, value } = arr[mid]
      if (time === timestamp) return value
      if (time > timestamp) {
        right = mid - 1
      } else {
        output = value
        left = mid + 1
      }
    }

    return output
  }
}

const timeMap = new TimeMap()
timeMap.set('foo', 'bar', 1)
console.log(timeMap.get('foo', 1))
console.log(timeMap.get('foo', 3))

timeMap.set('foo', 'bar2', 4)
console.log(timeMap.get('foo', 4))
console.log(timeMap.get('foo', 5))
