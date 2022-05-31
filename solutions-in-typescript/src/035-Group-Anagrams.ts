const groupAnagrams = (strs: string[]): string[][] => {
  const ans: string[][] = []
  const table = new Map<string, string[]>()

  for (const str of strs) {
    const key = str.split('').sort().join('')
    if (table.has(key)) {
      table.set(key, [...table.get(key)!, str])
    } else {
      table.set(key, [str])
    }
  }

  return [...table.values()]
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
console.log(groupAnagrams(['']))
console.log(groupAnagrams(['a']))
