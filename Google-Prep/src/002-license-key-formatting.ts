// Time: O(n) | Space: O(n)
const licenseKeyFormatting = (s: string, k: number): string => {
  const removedDashString = s.replace(/-/g, '')
  const head = removedDashString.length % k
  const output: string[] = []

  if (!!head) {
    output.push(removedDashString.slice(0, head))
  }

  for (let i = head; i < removedDashString.length; i += k) {
    output.push(removedDashString.slice(i, i + k))
  }

  return output.join('-').toUpperCase()
}

const s = '2-5g-3-J'
const k = 2
console.log(licenseKeyFormatting(s, k))
