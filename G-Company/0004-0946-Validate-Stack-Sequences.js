const validateStackSequences = (pushed, popped) => {
  // Edge Case
  if (pushed.length !== popped.length) {
    return false
  }

  // Initialized empty stack
  let stacks = []

  // loop through both pushed and popped array
  let poppedIdx = 0
  let stacksIdx = -1

  for (const pushedElement of pushed) {
    stacks.push(pushedElement)
    stacksIdx += 1

    while (stacks.length && stacks[stacksIdx] === popped[poppedIdx]) {
      stacks.pop()
      stacksIdx -= 1
      poppedIdx += 1
    }
  }

  return stacks.length === 0
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]))
