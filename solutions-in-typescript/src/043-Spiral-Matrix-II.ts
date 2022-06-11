// const generateMatrix = (n: number): number[][] => {
//   const dp = [...new Array(n)].map(() => new Array(n).fill(null))

//   const dirs = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0]
//   ]

//   const steps = [n, n - 1]

//   let num = 1
//   let dir = 0
//   let x = 0
//   let y = -1

//   while (steps[dir % 2] > 0) {
//     for (let i = 0; i < steps[dir % 2]; i++) {
//       x += dirs[dir][0]
//       y += dirs[dir][1]
//       dp[x][y] = num++
//     }

//     steps[dir % 2]--
//     dir = (dir + 1) % 4
//   }
//   return dp
// }

// Time: O(n * n) | Space: O(n * n)
const generateMatrix = (n: number): number[][] => {
  const dp = new Array(n).fill(null).map(() => new Array(n).fill(0))
  let count = 0
  let size = n * n

  const dirs = { left: 0, right: n - 1, top: 0, bottom: n - 1 }

  while (count < size) {
    //going right
    for (let i = dirs.left; i <= dirs.right; i++) {
      count++
      dp[dirs.top][i] = count
    }
    dirs.top++

    //going down
    for (let i = dirs.top; i <= dirs.bottom; i++) {
      count++
      dp[i][dirs.right] = count
    }
    dirs.right--

    //going left
    for (let i = dirs.right; i >= dirs.left; i--) {
      count++
      dp[dirs.bottom][i] = count
    }
    dirs.bottom--

    //going up
    for (let i = dirs.bottom; i >= dirs.top; i--) {
      count++
      dp[i][dirs.left] = count
    }
    dirs.left++
  }

  return dp
}

console.log(generateMatrix(3))
console.log(generateMatrix(1))
