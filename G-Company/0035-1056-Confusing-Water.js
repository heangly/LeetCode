var confusingNumber = function (n) {
  const obj = {
    0: 0,
    1: 1,
    6: 9,
    9: 6,
    8: 8
  }

  const numArray = String(n).split('')
  const ans = []

  for (let i = numArray.length - 1; i >= 0; i--) {
    if (numArray[i] in obj) {
      ans.push(obj[numArray[i]])
    } else {
      return false
    }
  }

  return ans.join('') !== numArray.join('')
}
