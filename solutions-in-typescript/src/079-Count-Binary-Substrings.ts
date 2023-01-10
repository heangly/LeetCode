// Time: O(N) | Space:O(N)
const countBinarySubStrings = (s: string): number => {
  const groups: number[] = [1]

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      groups.push(1)
    } else {
      groups[groups.length - 1]++
    }
  }

  let ans = 0
  for (let i = 1; i < groups.length; i++) {
    ans += Math.min(groups[i - 1], groups[i])
  }

  return ans
}

console.log('====================================')
console.log(countBinarySubStrings('00110011'))
console.log('====================================')
