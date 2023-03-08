const totalFruit = (fruits: number[]): number => {
  const map = new Map()
  let left = 0
  let max = 0

  for (let right = 0; right < fruits.length; right++) {
    const rightFruit = fruits[right]
    map.set(rightFruit, map.get(rightFruit) + 1 || 0)

    while (map.size > 2) {
      const leftFruit = fruits[left]
      if (map.get(leftFruit) === 0) {
        map.delete(leftFruit)
      } else {
        map.set(leftFruit, map.get(leftFruit) - 1)
      }
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}

console.log(totalFruit([0, 1, 2, 2]))
