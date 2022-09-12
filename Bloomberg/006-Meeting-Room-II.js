// https://leetcode.com/problems/meeting-rooms-ii/
// Time: O(n(log(n)) | Space: O(n)
const minMeetingRooms = (intervals) => {
  const starts = intervals.map((x) => x[0])
  const ends = intervals.map((x) => x[1])

  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)
  let roomsNeed = 0
  let ptr = 0

  for (let i = 0; i < starts.length; i++) {
    if (starts[i] >= ends[ptr]) {
      ptr++
    } else {
      roomsNeed++
    }
  }

  return roomsNeed
}

console.log(
  minMeetingRooms([
    [9, 10],
    [4, 9],
    [4, 17]
  ])
)
