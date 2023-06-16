const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
  const seen = new Set()
  const seeing = new Set()
  const adj: number[][] = [...Array(numCourses)].map(() => [])

  for (const [couseToTake, prereq] of prerequisites) {
    adj[prereq].push(couseToTake)
  }

  const dfs = (v: number) => {
    if (seen.has(v)) return true
    if (seeing.has(v)) return false

    seeing.add(v)
    for (const nv of adj[v]) {
      if (!dfs(nv)) return false
    }
    seeing.delete(v)
    seen.add(v)
    return true
  }

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false
  }

  return true
}

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
)
