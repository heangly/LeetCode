const permuteUnique = (
  nums: number[],
  memo: Map<string, boolean> = new Map()
): number[][] => {
  if (nums.length === 0) return [[]]

  const [first, ...rest] = nums
  const permWithoutFirst = permuteUnique(rest, memo)
  const allPerms: number[][] = []

  for (const perm of permWithoutFirst) {
    for (let i = 0; i <= perm.length; i++) {
      const valueToBePushed = [...perm.slice(0, i), first, ...perm.slice(i)]

      if (!memo.has(valueToBePushed.toString())) {
        memo.set(valueToBePushed.toString(), true)
        allPerms.push(valueToBePushed)
      }
    }
  }

  return allPerms
}

console.log(permuteUnique([1, 1, 2]))
console.log(permuteUnique([1, 2, 3]))
