function prefixCount(words: string[], pref: string): number {
  return words.reduce((acc, curr) => acc + (curr.startsWith(pref) ? 1 : 0), 0)
}
