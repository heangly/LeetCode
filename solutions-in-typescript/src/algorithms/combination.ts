/**
 * Combination can help us solve:
 * - Given N things, is how many ways can we ARRANGE them
 * - in how many ways can we do X?
 * - What is the shorted way to do Y?
 * */

// Combination is a collection of things where "ORDER does not matter" (NO DUPLICATE)
// if we have [a, b], we will not consider [b , a]

/**
 * Start from empty []
 * we have 2 choices: the current element, or NOT take the element -> so O(2^N)
 *
 */

const combination = (elements: string[]): string[][] => {
  if (!elements.length) return [[]]

  const firstElement = elements[0]
  const rest = elements.slice(1)
  // Not take the element
  const comsWithoutFirst = combination(rest)
  // Take the element
  const masterComsWithFirst: string[][] = []

  for (const comb of comsWithoutFirst) {
    const comWithFirst = [...comb, firstElement]
    masterComsWithFirst.push(comWithFirst)
  }

  return [...comsWithoutFirst, ...masterComsWithFirst]
}

console.log(combination(['a', 'b', 'c']))
