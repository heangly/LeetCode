// Time: O(n) | Space: O(1)
const countMatches = (items: string[][], ruleKey: 'type' | 'color' | 'name', ruleValue: string): number => {
  const lookupIndex = ruleKey === 'type' ? 0 : ruleKey === 'color' ? 1 : 2
  let count = 0

  for (const item of items) {
    if (item[lookupIndex] === ruleValue) count++
  }

  return count
}

const items = [
  ['phone', 'blue', 'pixel'],
  ['computer', 'silver', 'phone'],
  ['phone', 'gold', 'iphone']
]
const ruleKey = 'type'
const ruleValue = 'phone'
console.log(countMatches(items, ruleKey, ruleValue))
