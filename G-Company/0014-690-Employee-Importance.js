const GetImportance = (employees, id) => {
  let employee = employees.find((emp) => emp.id === id)

  if (!employee) return 0

  let sum = employee.importance

  for (const sub of employee.subordinates) {
    sum += GetImportance(employees, sub)
  }

  return sum
}
