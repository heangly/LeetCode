/**
 * Encodes a list of strings to a single string.
 */
// Time: O(N) | Space: O(N)
function encode(strs: string[]): string {
  return JSON.stringify(strs)
}

/**
 * Decodes a single string to a list of strings.
 */
// Time: O(N) |  Sapce: O(N)
function decode(s: string): string[] {
  return JSON.parse(s)
}
