// Time: O(N) | Space: O(N)
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const table: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    table[s[i]] = (table[s[i]] || 0) + 1
    table[t[i]] = (table[t[i]] || 0) - 1
  }

  return Object.values(table).every((value) => value === 0)
}

const s = 'anagram'
const t = 'nagaram'

console.log(isAnagram(s, t))
