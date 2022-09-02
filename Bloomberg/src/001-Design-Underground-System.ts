// https://leetcode.com/problems/design-underground-system/

class UndergroundSystem {
  clientsCheckIn: Record<string, [string, number]>
  stationTotalTime: Record<string, number>
  stationTotalTimeLength: Record<string, number>

  constructor() {
    this.clientsCheckIn = {}
    this.stationTotalTime = {}
    this.stationTotalTimeLength = {}
  }

  // Time: O(1)
  checkIn(id: number, stationName: string, t: number) {
    if (!(id in this.clientsCheckIn)) {
      this.clientsCheckIn[id] = [stationName, t]
    } else {
      this.clientsCheckIn[id].push(stationName, t)
    }
  }

  generateKey(startStation: string, endStation: string): string {
    return `${startStation}-${endStation}`
  }

  // Time: O(1)
  checkOut(id: number, stationName: string, t: number) {
    const [startStationName, startTime] = this.clientsCheckIn[id]
    const key = this.generateKey(startStationName, stationName)
    const time = t - startTime

    this.stationTotalTime[key] = (this.stationTotalTime[key] || 0) + time
    this.stationTotalTimeLength[key] =
      (this.stationTotalTimeLength[key] || 0) + 1

    this.clientsCheckIn[id].pop()
    this.clientsCheckIn[id].pop()
  }

  // Time: O(1)
  getAverageTime(startStation: string, endStation: string) {
    const key = this.generateKey(startStation, endStation)
    return this.stationTotalTime[key] / this.stationTotalTimeLength[key]
  }
}

export {}
