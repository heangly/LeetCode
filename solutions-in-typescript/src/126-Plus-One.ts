// Time: O(N) | Space: O(1)
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++ // If the digit is not 9, simply increment and return
      return digits
    }
    digits[i] = 0 // If digit is 9, set it to 0 and continue
  }

  // If all digits were 9, we need to add a new leading 1
  digits.unshift(1)
  return digits
}
