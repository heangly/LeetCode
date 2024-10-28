//https://leetcode.com/problems/add-strings/

const addStrings = (num1, num2) => {
  return '' + (BigInt(num1) + BigInt(num2))
}

console.log(addStrings('11', '123'))
