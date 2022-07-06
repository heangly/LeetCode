// https://leetcode.com/problems/logger-rate-limiter/submissions/
// Time: O(1) | space: O(n)
class Logger {
  table: { [key: string]: number }

  constructor() {
    this.table = {}
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
    if (!(message in this.table) || timestamp >= this.table[message] + 10) {
      this.table[message] = timestamp
      return true
    }

    return false
  }
}

export {}
