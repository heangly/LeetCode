var maxProfit = function (prices) {
  const pairs = { 0: 0, 1: 1, 8: 8, 6: 9, 9: 6 }
  const arr = []

  for (let i = 0; i < num.length; i++) {
    if (!pairs.hasOwnProperty(num[i])) return false
    arr.push(pairs[num[i]])
  }

  let start = 0
  let end = num.length - 1

  while (start <= end) {
    if (num[start] != arr[end]) return false
    start += 1
    end -= 1
  }

  return true
}
