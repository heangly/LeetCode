// https://leetcode.com/problems/my-calendar-i/

class MyCalendar {
  events: number[][] = []

  constructor() {
    this.events = []
  }

  book(start: number, end: number): boolean {
    for (const event of this.events) {
      if (start < event[1] && end > event[0]) return false
    }

    this.events.push([start, end])
    return true
  }
}

const calendar = new MyCalendar()
console.log(calendar.book(10, 20))
console.log(calendar.book(15, 25))
console.log(calendar.book(20, 30))

export {}
