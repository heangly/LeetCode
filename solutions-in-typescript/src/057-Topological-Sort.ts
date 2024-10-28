type Dependency = [number, number]

type DFS = {
  job: number
  jobOrder: number[]
  graph: Record<number, number[]>
  visiting: Record<number, boolean>
  visited: Record<number, boolean>
}

// Time: O(n + e) | Space: O(n + e) where n is node and e is edge
export function topologicalSort(jobs: number[], deps: Dependency[]): number[] {
  const jobOrder: number[] = []
  const graph: Record<number, number[]> = {}
  const visiting: Record<number, boolean> = {}
  const visited: Record<number, boolean> = {}

  for (const [prereq, job] of deps) {
    graph[job] = graph[job] || []
    graph[job].push(prereq)
  }

  for (const job of jobs) {
    const isCycle = dfs({ job, jobOrder, graph, visiting, visited })
    if (isCycle) return []
  }

  return jobOrder
}

const dfs = ({ job, jobOrder, graph, visited, visiting }: DFS) => {
  if (visiting[job]) return true
  if (visited[job]) return

  visiting[job] = true

  const deps = graph[job] || []

  for (const dep of deps) {
    const isCycle = dfs({ job: dep, jobOrder, graph, visited, visiting })
    if (isCycle) return []
  }

  visiting[job] = false
  visited[job] = true
  jobOrder.push(job)
}

// Example usage
const jobs = [1, 2, 3, 4]
const deps: Dependency[] = [
  [1, 2],
  [1, 3],
  [3, 4],
  [2, 4]
]

const sortedOrder = topologicalSort(jobs, deps)
console.log(sortedOrder)
