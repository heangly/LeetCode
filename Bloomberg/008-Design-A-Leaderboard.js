// https://leetcode.com/problems/design-a-leaderboard/

class MaxHeap {
  constructor() {
    this.heap = []
  }

  siftUp() {
    let currIdx = this.heap.length - 1
    let parentIdx = Math.floor((currIdx - 1) / 2)

    while (parentIdx <= 0 && this.heap[parentIdx] < this.heap[currIdx]) {
      this.swap(parentIdx, currIdx)
      currIdx = parentIdx
      parentIdx = Math.floor((currIdx - 1) / 2)
    }
  }

  siftDown(idx) {
    let currIdx = idx
    let firstChildIdx = idx * 2 + 1

    while (firstChildIdx < this.heap.length) {
      let secondChildIdx = idx * 2 + 2 < this.heap.length ? idx * 2 + 2 : -1
      let idxToSwap = firstChildIdx

      if (
        secondChildIdx !== -1 &&
        this.heap[secondChildIdx] > this.heap[firstChildIdx]
      ) {
        idxToSwap = secondChildIdx
      }

      if (this.heap[currIdx] < this.heap[idxToSwap]) {
        this.swap(currIdx, idxToSwap)
        currIdx = idxToSwap
        firstChildIdx = currIdx * 2 + 1
      } else {
        return
      }
    }
  }

  insert(val) {
    this.heap.push(val)
    this.siftUp()
  }

  remove(idx) {
    this.swap(idx, this.heap.length - 1)
    this.heap.pop()
    this.siftDown(idx)
  }

  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}

class LeaderBoard {
  constructor() {
    this.players = {}
  }

  addScore(playerId, score) {
    this.players[playerId] = (this.players[playerId] || 0) + score
  }

  top(K) {
    const topScores = Object.entries(this.players).sort((a, b) => b[1] - a[1])

    let sum = 0
    for (let i = 0; i < K; i++) {
      sum += topScores[i][1]
    }

    return sum
  }

  reset(playerId) {
    delete this.players[playerId]
  }
}
