/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  const prerequisiteMap = {}
  const visitSet = new Set()

  for (let i = 0; i < numCourses; i++) {
    prerequisiteMap[i] = []
  }

  for (const [course, pre] of prerequisites) {
    prerequisiteMap[course].push(pre)
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i, visitSet, prerequisiteMap)) return false
  }

  return true
}

const dfs = (course, seen, table) => {
  if (seen.has(course)) return false
  if (table[course].length === 0) return true

  seen.add(course)

  while (table[course].length) {
    const newCourseToExplore = table[course].pop()
    if (!dfs(newCourseToExplore, seen, table)) return false
  }

  return true
}
