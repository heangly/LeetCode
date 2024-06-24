type Graph = Record<number, number[]>
type visit = Record<number, boolean>

// Time: O(c + p) | Space: O(c + p) where c is the number of course and r is the number of prereqs
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: Graph = {}
  const visiting: visit = {}
  const visited: visit = {}

  const output: number[] = []

  for (const [course, prereq] of prerequisites) {
    graph[course] = graph[course] || []
    graph[course].push(prereq)
  }

  for (let i = 0; i < numCourses; i++) {
    const isCycle = dfs(i, output, graph, visiting, visited)
    if (isCycle) return []
  }

  return output
}

const dfs = (course: number, output: number[], graph: Graph, visiting: visit, visited: visit) => {
  if (visiting[course]) return true
  if (visited[course]) return

  visiting[course] = true
  const prereqs = graph[course] || []

  for (const prereq of prereqs) {
    const isCycle = dfs(prereq, output, graph, visiting, visited)
    if (isCycle) return true
  }

  visiting[course] = false
  visited[course] = true
  output.push(course)
}
