const convert = (s: string, numRows: number): string => {
  if (numRows === 1) return s

  let sign = 1
  let idx = 1
  let map = new Map<number, string>()

  for (let i = 0; i < s.length; i++) {
    if (!map.has(idx)) {
      map.set(idx, s[i])
    } else {
      map.set(idx, map.get(idx)! + s[i])
    }

    idx += sign

    if (idx <= 1 || idx >= numRows) {
      sign *= -1
    }
  }

  return [...map.values()].join('')
}

console.log(convert('PAYPALISHIRING', 3))
console.log(convert('PAYPALISHIRING', 4))
console.log(convert('A', 1))
