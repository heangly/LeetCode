const removeDuplicates = (s: string): string => {
  const stack: string[] = []

  for (const char of s) {
    stack[stack.length - 1] === char ? stack.pop() : stack.push(char)
  }

  return stack.join('')
}

console.log('====================================')
console.log(removeDuplicates('abbaca'))
console.log('====================================')

export {}
