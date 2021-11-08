// Time: O(nlog(n)) || Space O(n)
const isNStraightHand = (hand, groupSize) => {
  if (hand.length % groupSize !== 0) return false

  hand.sort((a, b) => a - b)

  let orderedMap = new Map()
  for (const num of hand) {
    orderedMap.set(num, (orderedMap.get(num) || 0) + 1)
  }

  for (let [card, count] of orderedMap) {
    if (count > 0) {
      for (let i = 1; i < groupSize; i++) {
        if ((orderedMap.get(card + i) || 0) < count) return false
        orderedMap.set(card + i, orderedMap.get(card + i) - count)
      }
    }
  }
  return true
}

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
