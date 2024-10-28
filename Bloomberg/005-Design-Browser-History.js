// https://leetcode.com/problems/design-browser-history/

class BrowserHistory {
  constructor(homePage) {
    this.stack = [homePage]
    this.currentIdx = 0
  }

  // Time: O(n)
  visit(url) {
    this.stack = this.stack.slice(0, this.currentIdx + 1)
    this.stack.push(url)
    this.currentIdx++
  }

  // Time: O(1)
  back(steps) {
    this.currentIdx -= steps

    if (this.currentIdx < 0) {
      this.currentIdx = 0
    }

    return this.stack[this.currentIdx]
  }

  // Time: O(1)
  forward(steps) {
    this.currentIdx += steps

    if (this.currentIdx >= this.stack.length) {
      this.currentIdx = this.stack.length - 1
    }

    return this.stack[this.currentIdx]
  }
}

const browserHistory = new BrowserHistory('leetcode.com')
console.log(browserHistory.visit('google.com'))
console.log(browserHistory.visit('facebook.com'))
console.log(browserHistory.visit('youtube.com'))

console.log(browserHistory.back(1))
console.log(browserHistory.back(1))

console.log(browserHistory.forward(1))

console.log(browserHistory.visit('linkedin.com'))

console.log(browserHistory.forward(2))

console.log(browserHistory.back(2))
console.log(browserHistory.back(7))
