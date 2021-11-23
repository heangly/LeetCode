/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function (str1, str2) {
  if (str1 === str2) return true

  const hashMap = {}
  const alphabets = {}
  let i = 0

  while (i < str1.length) {
    alphabets[str2[i]] = true

    if (str1[i] in hashMap && hashMap[str1[i]] !== str2[i]) return false

    hashMap[str1[i]] = str2[i]
    i++
  }

  return Object.keys(alphabets).length !== 26
}
