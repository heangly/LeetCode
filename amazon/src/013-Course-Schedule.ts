// https://leetcode.com/problems/course-schedule/
const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
  const seen = new Set()
  const seeing = new Set()
  const adj: number[][] = [...Array(numCourses)].map((r) => [])

  for (let [u, v] of prerequisites) {
    adj[v].push(u)
  }

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false
    }
  }
  return true

  function dfs(v: number) {
    if (seen.has(v)) return true
    if (seeing.has(v)) return false

    seeing.add(v)
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false
      }
    }
    seeing.delete(v)
    seen.add(v)
    return true
  }
}

export {}
