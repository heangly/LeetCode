class Node {
  val: number
  left: Node | null
  right: Node | null

  constructor(val?: number, left?: Node | null, right?: Node | null) {
    this.val = val ?? 0
    this.left = left ?? null
    this.right = right ?? null
  }
}

const treeToDoublyList = (root: Node | null): Node | null => {
  const dfs = (tree: Node | null) => {
    if (!tree) return

    dfs(tree.left)

    if (tail) {
      tail.right = tree
      tree.left = tail
    } else {
      head = tree
    }

    tail = tree
    dfs(tree.right)
  }

  let head: Node | null = null
  let tail: Node | null = null

  dfs(root)

  tail!.right = head
  head!.left = tail

  return head
}

const tree = new Node(4)
tree.left = new Node(2)
tree.left.left = new Node(1)
tree.left.right = new Node(3)
tree.right = new Node(5)

console.log('====================================')
console.log(treeToDoublyList(tree))
console.log('====================================')

export {}
