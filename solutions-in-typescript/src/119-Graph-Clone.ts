// Definition for Node.
class Node {
  val: number
  neighbors: Node[]
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val
    this.neighbors = neighbors === undefined ? [] : neighbors
  }
}

const cloneGraph = (node: Node | null): Node | null => {
  if (!node) return null
  const map: Record<number, Node> = {}

  const traverse = (node: Node) => {
    if (!node) return node
    if (node.val in map) return map[node.val]

    const copy = new Node(node.val)
    map[node.val] = copy

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(traverse(neighbor))
    }

    return copy
  }

  return traverse(node)
}

const graph = new Node()

console.log(cloneGraph(graph))
export {}
