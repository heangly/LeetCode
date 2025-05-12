// Time: O(N^3) | Space:O(N)
function findEvenNumbers(digits: number[]): number[] {
  const result = new Set<number>()
  const used = Array(digits.length).fill(false)

  const helper = (path: number[]) => {
    if (path.length === 1 && path[0] === 0) return

    if (path.length === 3) {
      const num = Number(path.join(''))
      if (num % 2 === 0) {
        result.add(num)
      }
      return
    }

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue

      used[i] = true
      path.push(digits[i])

      helper(path)
      path.pop()

      used[i] = false
    }
  }

  helper([])

  return Array.from(result).sort((a, b) => a - b)
}
