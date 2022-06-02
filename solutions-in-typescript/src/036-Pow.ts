const myPow = (x: number, n: number): number => {
  return x ** n
}

const inputs = [
  [2.0, 10],
  [2.1, 3],
  [2.0, -2]
]

for (const [x, n] of inputs) {
  console.log(myPow(x, n))
}
