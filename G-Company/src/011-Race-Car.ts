// https://leetcode.com/problems/race-car/
// Time: O(v + e) | Space: O(n)
const raceCar = (target: number): number => {
  const q = [{ moves: 0, pos: 0, speed: 1 }]

  while (q.length) {
    const { moves, pos, speed } = q.shift()!
    if (pos === target) return moves

    q.push({ moves: moves + 1, pos: pos + speed, speed: speed * 2 })

    if (
      (pos + speed > target && speed > 0) ||
      (pos + speed < target && speed < 0)
    ) {
      q.push({ moves: moves + 1, pos, speed: speed > 0 ? -1 : 1 })
    }
  }

  return -1
}

// console.log(raceCar(3)) //2
// console.log(raceCar(6)) // 5
console.log(raceCar(4)) // 5
