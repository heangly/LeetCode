const convertToTitle = (columnNumber: number): string => {
  if (columnNumber < 27) return String.fromCharCode(columnNumber + 64)

  let output: string[] = []
  while (columnNumber > 0) {
    let temp = columnNumber % 26
    temp = temp === 0 ? 26 : temp
    output.push(String.fromCharCode(temp + 64))
    columnNumber -= temp
    columnNumber /= 26
  }

  return output.reverse().join('')
}

console.log('====================================')
console.log(convertToTitle(701))
console.log('====================================')
