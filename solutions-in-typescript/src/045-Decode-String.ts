function decodeString(s: string): string {
  const stack: [string, number][] = []

  let curr = ''
  let num = 0

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      num = num * 10 + Number(char)
    } else if (char === '[') {
      stack.push([curr, num])

      curr = ''
      num = 0
    } else if (char === ']') {
      const [prev, repeat] = stack.pop()!

      curr = prev + curr.repeat(repeat)
    } else {
      curr += char
    }
  }

  return curr
}
