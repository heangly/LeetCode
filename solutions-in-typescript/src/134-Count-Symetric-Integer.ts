function countSymmetricIntegers(low: number, high: number): number {
  let count = 0

  for (let i = low; i <= high; i++) {
    const stringDigit = i.toString()

    if (stringDigit.length % 2 !== 0) continue

    const half = stringDigit.length / 2
    const firstHalf = stringDigit.slice(0, half)
    const secondHalf = stringDigit.slice(half)

    const firstSum = getSum(firstHalf)
    const secondSum = getSum(secondHalf)

    if (firstSum === secondSum) count++
  }

  return count
}

const getSum = (digit: string) => {
  let sum = 0

  for (const str of digit) {
    sum += Number(str)
  }
  return sum
}
