const alienOrder = (words: string[]): string => {
  const graph: Record<string, string[]> = {}
  words.forEach((word) => word.split('').forEach((char) => (graph[char] = [])))

  for (let i = 0; i < words.length - 1; i++) {
    const top = words[i]
    const down = words[i + 1]
    if (top.length > down.length && top.startsWith(down)) return ''

    const minLength = Math.min(top.length, down.length)
    for (let j = 0; j < minLength; j++) {
      if (top[j] !== down[j]) {
        graph[top[j]].push(down[j])
        break
      }
    }
  }

  const visiting = new Set<string>()
  const visited = new Set<string>()
  const result: string[] = []

  const dfs = (char: string) => {
    if (visiting.has(char)) return false
    if (visited.has(char)) return true

    visiting.add(char)

    for (let n of graph[char]) {
      if (!dfs(n)) return false
    }

    visiting.delete(char)
    visited.add(char)
    result.push(char)
    return true
  }

  for (const key of Object.keys(graph)) {
    if (!dfs(key)) return ''
  }

  return result.reverse().join('')
}

console.log(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']))
