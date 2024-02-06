// Time: O(NK) | Space: O(NK)
function groupAnagrams(strs: string[]): string[][] {
  const hashMap: Record<string, string[]> = {}

  for (const str of strs) {
    const arr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 97
      arr[index]++
    }

    const key = arr.join('#')

    if (key in hashMap) {
      hashMap[key].push(str)
    } else {
      hashMap[key] = [str]
    }
  }

  return Object.values(hashMap)
}

// Time: O(n * kLogk) | Space: O(N)
// function groupAnagrams(strs: string[]): string[][] {
//   const hashMap: Record<string, string[]> = {}

//   for (const str of strs) {
//     const newSortedStr = str.split('').sort().join('')
//     if (newSortedStr in hashMap) {
//       hashMap[newSortedStr].push(str)
//     } else {
//       hashMap[newSortedStr] = [str]
//     }
//   }

//   return Object.values(hashMap)
// }

console.log(groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']))
