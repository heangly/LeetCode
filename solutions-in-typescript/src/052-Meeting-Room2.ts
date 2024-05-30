// Time: O(n^2) | Space:O(n)
function minMeetingRooms(intervals: number[][]): number {
  intervals.sort((a, b) => b[0] - a[0])
  const rooms: number[] = []
  const [_, firstEndTime] = intervals.pop()!
  rooms.push(firstEndTime)

  while (intervals.length) {
    const [currStart, currEnd] = intervals.pop()!
    const index = rooms.findIndex((endTime) => endTime <= currStart)
    if (index === -1) {
      rooms.push(currEnd)
    } else {
      rooms[index] = currEnd
    }
  }

  return rooms.length
}
