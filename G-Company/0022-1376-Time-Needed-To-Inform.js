const numOfMinutes = (n, headID, manager, informTime) => {
  const timeFromEmployeeToHead = (id) => {
    if (manager[id] !== -1) {
      informTime[id] += timeFromEmployeeToHead(manager[id])
      manager[id] = -1
    }
    return informTime[id]
  }

  manager.forEach((_, index) => timeFromEmployeeToHead(index))
  return Math.max(...informTime)
}

console.log(numOfMinutes(6, 2, [2, 2, -1, 2, 2, 2], [0, 0, 1, 0, 0, 0]))
