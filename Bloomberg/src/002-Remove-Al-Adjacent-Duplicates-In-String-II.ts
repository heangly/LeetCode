// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// Tme: O(n) | Space: O(n)
const removeDuplicates = (s: string, k: number): string => {
  const stack: { char: string; count: number }[] = []

  for (const letter of s) {
    if (stack.length && stack[stack.length - 1].char === letter) {
      stack[stack.length - 1].count++

      if (stack[stack.length - 1].count === k) {
        stack.pop()!
      }
    } else {
      stack.push({ char: letter, count: 1 })
    }
  }

  let ans: string[] = []

  for (const { char, count } of stack) {
    ans.push(char.repeat(count))
  }

  return ans.join('')
}

console.log(removeDuplicates('deeedbbcccbdaa', 3))
