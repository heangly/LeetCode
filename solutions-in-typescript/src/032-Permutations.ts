const permute = (nums: number[]): number[][] => {
  if (nums.length === 0) return [[]]

  const [first, ...rest] = nums
  const permWithoutFirst = permute(rest)
  const permWithFirst = []

  for (const perm of permWithoutFirst) {
    for (let i = 0; i <= perm.length; i++) {
      permWithFirst.push([...perm.slice(0, i), first, ...perm.slice(i)])
    }
  }

  return permWithFirst
}

console.log(permute([1, 2, 3]))
console.log(permute([0, 1]))
console.log(permute([1]))
