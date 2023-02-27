// O(n * m) where n is the length of emails, m is the length of each email
// O(n) where n is the length of  emails
const numUniqueEmails = (emails: string[]) => {
  const uniqueEmails = new Set<string>()
  for (const email of emails) {
    const [local, domain] = email.split('@')
    const localWithoutPlus = local.split('+')[0]
    const localWithoutPeriod = localWithoutPlus.replace(/\./g, '')
    uniqueEmails.add(localWithoutPeriod + '@' + domain)
  }

  return uniqueEmails.size
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
)

console.log(numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']))
