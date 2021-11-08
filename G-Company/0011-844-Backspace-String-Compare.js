// Time: O(s+t) where s is the length s , t is the length of t
// Space: O(s+t)
var backspaceCompare = function (s, t) {
  let sArray = s.split('')
  let tArray = t.split('')

  markPlaceToDelete(sArray)
  markPlaceToDelete(tArray)

  return sArray.join('') === tArray.join('')
}

const markPlaceToDelete = (array) => {
  let numHash = 0
  let idx = array.length - 1
  while (idx >= 0) {
    if (array[idx] === '#') {
      array[idx] = null
      numHash += 1
    } else if (numHash > 0) {
      array[idx] = null
      numHash -= 1
    }
    idx -= 1
  }
}
