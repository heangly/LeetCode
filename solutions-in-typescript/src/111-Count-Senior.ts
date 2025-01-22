function countSeniors(details: string[]): number {
  let res: number = 0

  for (const detail of details) {
    const age = detail[11] + detail[12]
    if (age > '60') res++
  }

  return res
}
