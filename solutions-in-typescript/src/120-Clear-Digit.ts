// Time: O(N) where N is the total lenght of 's'
// Space: O(C)  where 'C' is the total number of non-digit string
function clearDigits(s: string): string {
  const arr: string[] = []

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      arr.pop()
    } else {
      arr.push(char)
    }
  }

  return arr.join('')
}
