// Time: O(N(log(N))) | Space:O(N)
function carFleet(target: number, position: number[], speed: number[]): number {
  const newArr: { position: number; time: number }[] = []
  const stack: { position: number; time: number }[] = []

  for (let i = 0; i < position.length; i++) {
    newArr.push({ position: position[i], time: (target - position[i]) / speed[i] })
  }

  newArr.sort((a, b) => a.position - b.position)

  while (newArr.length) {
    const currCar = newArr.pop()!

    if (!stack.length) {
      stack.push(currCar)
    } else {
      const nextCar = stack.pop()!
      if (currCar.time <= nextCar.time) {
        stack.push(nextCar)
      } else {
        stack.push(nextCar)
        stack.push(currCar)
      }
    }
  }

  return stack.length
}

const target1 = 12
const position = [10, 8, 0, 5, 3]
const speed = [2, 4, 1, 1, 3]

console.log(carFleet(target1, position, speed))
