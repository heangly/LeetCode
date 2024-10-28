/**
 * @param {string} s
 * @return {number}
 */

// Time: O(n)  | Space: O(1)
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0

  for (let i = 0; i < s.length; i++) {
    let curr = obj[s[i]]
    let next = obj[s[i + 1]]

    if (curr < next) {
      total = total - curr + next
      i++
    } else {
      total += curr
    }
  }

  return total
}

console.log(romanToInt('III'))
