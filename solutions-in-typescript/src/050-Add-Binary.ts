const addBinary = (a: string, b: string): string => {
  const aBin = `0b${a}`
  const bBin = `0b${b}`

  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
}

console.log(addBinary('11', '1')) // 100
console.log(addBinary('1010', '1011')) // 10101
