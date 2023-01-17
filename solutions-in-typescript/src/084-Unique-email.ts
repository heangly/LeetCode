// Time: O(N * M) | Space: O(N)
const numUniqueEmails = (emails: string[]): number => {
  const ans = new Set<string>()

  for (const email of emails) {
    const [localName, domain] = email.split('@')
    const [localNameBeforePlus] = localName.split('+')
    let localNameWithoutDot = ''
    for (const char of localNameBeforePlus) {
      if (char === '.') continue
      localNameWithoutDot += char
    }
    ans.add(localNameWithoutDot + '@' + domain)
  }

  return ans.size
}

console.log('====================================')
console.log(
  numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
)
console.log('====================================')
