// Time: O(n)  | Space: O(1)
const lengthOfLastWord = (s: string): number => {
  // return s.trim().split(' ').pop()!.length

  let idx = s.length - 1
  while (s[idx] === ' ') idx--

  for (let i = idx; i >= 0; i--) {
    if (s[i] === ' ') return idx - i
  }

  return idx + 1
}

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))
console.log(lengthOfLastWord('a'))
