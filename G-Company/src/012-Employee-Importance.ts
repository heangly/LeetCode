// https://leetcode.com/problems/employee-importance/

class Employee {
  id: number
  importance: number
  subordinates: number[]

  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = id === undefined ? 0 : id
    this.importance = importance === undefined ? 0 : importance
    this.subordinates = subordinates === undefined ? [] : subordinates
  }
}

// Time: O(n) | space: O(n)
const getImportance = (employees: Employee[], id: number): number => {
  const table: { [key: string]: Employee } = {}
  for (const emp of employees) {
    table[emp.id] = emp
  }

  let important = 0

  const helper = (current: Employee) => {
    important += current.importance

    for (const subId of current.subordinates) {
      helper(table[subId])
    }
  }

  helper(table[id])

  return important
}
