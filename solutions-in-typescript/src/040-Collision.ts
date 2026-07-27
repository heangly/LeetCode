// Time: O(N)
// Space: O(N)
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = []

  for (const asteroid of asteroids) {
    let destroyed = false

    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1]
      const abs = Math.abs(asteroid)

      if (top < abs) {
        stack.pop()
      } else if (top === abs) {
        stack.pop()
        destroyed = true
        break
      } else {
        destroyed = true
        break
      }
    }

    if (!destroyed) {
      stack.push(asteroid)
    }
  }

  return stack
}
