// Time: O(N) | Space: O(1)
function isLongPressedName(name: string, typed: string): boolean {
  let i = 0 // Pointer for the 'name' string
  let j = 0 // Pointer for the 'typed' string

  // Iterate through the 'typed' string
  while (j < typed.length) {
    // If the current characters match, advance both pointers
    if (i < name.length && name[i] === typed[j]) {
      i++
      j++
    }
    // If the current character in 'typed' is a long-pressed repetition of the *previous* typed character
    else if (j > 0 && typed[j] === typed[j - 1]) {
      j++
    }
    // If neither of the above conditions is met, it's not a valid long press
    else {
      return false
    }
  }

  // After iterating through 'typed', ensure all characters in 'name' have been matched
  return i === name.length
}
