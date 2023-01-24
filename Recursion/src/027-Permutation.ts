const permute = (nums: number[]): number[][] => {
  if (nums.length === 0) return [[]]
  const [first, ...rest] = nums
  const allPerms = []
  const permWithoutFirst = permute(rest)

  for (const p of permWithoutFirst) {
    for (let i = 0; i <= p.length; i++) {
      allPerms.push([...p.slice(0, i), first, ...p.slice(i)])
    }
    console.log('====================================')
    console.log('all perns:', allPerms)
    console.log('====================================')
  }

  return allPerms
}

console.log(permute([1, 2, 3]))
