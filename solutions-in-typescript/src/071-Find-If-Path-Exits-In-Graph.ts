// Time: o(n + m) | Space: O(o)
const validPath = (
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean => {
  const table: Record<number, number[]> = {}

  for (const [key1, key2] of edges) {
    table[key1] = table[key1] ?? []
    table[key1].push(key2)

    table[key2] = table[key2] ?? []
    table[key2].push(key1)
  }

  const path = [source]
  const visited = new Set<number>()

  while (path.length) {
    const currentPath = path.pop()!
    if (currentPath === destination) return true

    if (currentPath in table) {
      if (visited.has(currentPath)) continue
      path.push(...table[currentPath])
    }

    visited.add(currentPath)
  }

  return false
}

console.log('====================================')
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3]
    ],
    0,
    5
  )
)
console.log('====================================')
