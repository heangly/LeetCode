//https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

const minRemoveToMakeValid = (s) => {
  const arr = s.split('')
  const openParenIdx = []
  const closeParenIdx = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      openParenIdx.push(i)
    } else if (char === ')') {
      openParenIdx.length ? closeParenIdx.push(i) : openParenIdx.pop()
    }
  }

  for (const idx of closeParenIdx) {
    arr[idx] = null
  }

  for (const idx of openParenIdx) {
    arr[idx] = null
  }

  return arr.join('')
}

const s1 = 'lee(t(c)o)de)'
const s2 = 'a)b(c)d'
const s3 = '"))(("'
const s4 = '(a(b(c)d)'
const s5 = '())()((('

console.log(minRemoveToMakeValid(s1))
console.log(minRemoveToMakeValid(s2))
console.log(minRemoveToMakeValid(s3))
console.log(minRemoveToMakeValid(s4))
console.log(minRemoveToMakeValid(s5))
