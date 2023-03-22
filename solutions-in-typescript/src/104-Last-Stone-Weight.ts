// Time: O(N^2) | Space: O(1)
const lastStoneWeight = (stones: number[]): number => {
  //O(N(Log(N)))
  stones.sort((a, b) => a - b)

  //O(N)
  while (stones.length >= 2) {
    const y = stones.pop()!
    const x = stones.pop()!

    if (x !== y) {
      stones.push(y - x)
      let i = stones.length - 1
      // O(N) where N is the new length of stones after popping
      while (i >= 1 && stones[i] < stones[i - 1]) {
        ;[stones[i], stones[i - 1]] = [stones[i - 1], stones[i]]
        i--
      }
    }
  }
  return stones[stones.length - 1] || 0
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
