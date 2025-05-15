function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const result: string[] = [words[0]]

  for (let i = 1; i < words.length; i++) {
    const lastIndex = words.indexOf(result[result.length - 1])

    if (groups[i] !== groups[lastIndex]) {
      result.push(words[i])
    }
  }

  return result
}
