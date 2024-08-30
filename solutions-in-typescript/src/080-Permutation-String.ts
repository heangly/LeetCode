function checkInclusion(s1: string, s2: string): boolean {
  // Hash maps to count characters
  const s1Count: { [key: string]: number } = {}
  const s2Count: { [key: string]: number } = {}

  // Initialize the hash maps with the frequency of characters in s1 and the first window in s2
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1
    s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1
  }

  // Check the first window
  if (matches(s1Count, s2Count)) return true

  // Slide the window over s2 and update the character counts
  for (let i = s1.length; i < s2.length; i++) {
    const newChar = s2[i]
    const oldChar = s2[i - s1.length]

    // Add the new character to the window
    s2Count[newChar] = (s2Count[newChar] || 0) + 1

    // Remove the old character from the window

    s2Count[oldChar]--

    // Check if the current window matches the s1 count
    if (matches(s1Count, s2Count)) return true
  }

  // No matching window found
  return false
}

// Helper function to check if two hash maps are equal
const matches = (map1: { [key: string]: number }, map2: { [key: string]: number }): boolean => {
  for (let char in map1) {
    if (map1[char] !== map2[char]) return false
  }
  return true
}
