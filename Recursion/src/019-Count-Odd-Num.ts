const countOdd = (low: number, high: number): number => {
  const c = Math.round((high - low) / 2)
  return low % 2 === 1 && high % 2 === 1 ? c + 1 : c
}

console.log('====================================')
console.log(countOdd(3, 7))
console.log('====================================')
