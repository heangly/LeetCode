// https://leetcode.com/problems/design-underground-system/

interface Client {
  id: string
}

class UndergroundSystem {
  client: Record<string, string>

  constructor() {
    this.client = {}
  }

  checkIn(id: number, stationName: string, t: number) {
    // can only check in to 1 place at a time
  }
  checkOut(id: number, stationName: string, t: number) {}

  getAverageTime(startStation: string, endStation: string) {
    // returns the average time it take to travel from statStation to endStation
    // the average tie is computed from all the previous travelling times from start to end station directly
  }
}

export {}
