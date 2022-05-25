const multiply = (num1: string, num2: string): string => {
  return (Number(num1) * Number(num2)).toString()
}

console.log(multiply('2', '3'))
console.log(multiply('123', '456'))
