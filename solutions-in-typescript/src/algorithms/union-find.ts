class UnionFind {
  parent: number[]
  rank: number[]

  constructor(size: number) {
    this.parent = Array(size)
      .fill(0)
      .map((_, index) => index)
    this.rank = Array(size).fill(1)
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]) // Path compression
    }
    return this.parent[x]
  }

  union(x: number, y: number): void {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY
      } else {
        this.parent[rootY] = rootX
        this.rank[rootX] += 1
      }
    }
  }
}

function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length
  const unionFind = new UnionFind(n)

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] === 1) {
        unionFind.union(i, j)
      }
    }
  }

  const uniqueProvinces = new Set<number>()
  for (let i = 0; i < n; i++) {
    uniqueProvinces.add(unionFind.find(i))
  }

  return uniqueProvinces.size
}
