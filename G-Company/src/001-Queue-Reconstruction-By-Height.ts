// https://leetcode.com/problems/queue-reconstruction-by-height/

const reconstructQueue = (people: number[][]): number[][] => {
  // sort decending by height | if same height -> sort acending by k
  people.sort((a, b) => (a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1]))
  const ans: number[][] = []

  for (const person of people) {
    const idx = person[1]

    if (ans[idx] === null) {
      ans.push(person)
    } else {
      ans.splice(idx, 0, person)
    }
  }

  return ans
}

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ])
)
