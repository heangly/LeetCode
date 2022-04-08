// Time: O(d) | Space O(d) where d is the length of total digit of number
const reverse = (x: number): number => {
  const sign = Math.sign(x)
  const arr = getReverseNumInArrayForm(Math.abs(x))
  let ans = convertReversedNumFromArrayToInt(arr) * sign

  let min = Math.pow(-2, 31)
  let max = Math.pow(2, 31) - 1
  return ans > min && ans < max ? ans : 0
}

const getReverseNumInArrayForm = (num: number): number[] => {
  const arr: number[] = []
  while (num !== 0) {
    arr.push(num % 10)
    num = Math.floor(num / 10)
  }
  return arr
}

const convertReversedNumFromArrayToInt = (arr: number[]): number => {
  let pow = 0
  let ans = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    ans += arr[i] * Math.pow(10, pow)
    pow++
  }
  return ans
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
