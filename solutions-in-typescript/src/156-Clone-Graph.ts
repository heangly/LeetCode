class _Node {
  val: number
  neighbors: _Node[]

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null

  const map = new Map<_Node, _Node>()
  const q = [node]
  map.set(node, new _Node(node.val))

  while (q.length) {
    const curr = q.shift()!

    for (const neighbor of curr.neighbors) {
      if (!map.has(neighbor)) {
        map.set(neighbor, new _Node(neighbor.val))
        q.push(neighbor)
      }

      map.get(curr)!.neighbors.push(map.get(neighbor)!)
    }
  }

  return map.get(node)!
}
