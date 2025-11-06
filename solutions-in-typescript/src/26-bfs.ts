type Graph = { [key: string]: string[] }

const bfs = (graph: Graph, start: string) => {
  const visited = new Set<string>()
  visited.add(start)

  const q = [start]

  while (q.length) {
    const node = q.shift()!
    console.log(node)

    for (const ne of graph[node]) {
      if (!visited.has(ne)) {
        visited.add(ne)
        q.push(ne)
      }
    }
  }
}

const graph: Graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A'],
  D: ['B'],
  E: ['B']
}

bfs(graph, 'A')
