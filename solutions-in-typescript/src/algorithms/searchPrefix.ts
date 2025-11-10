interface People {
  first: string
  last: string
}

const people: People[] = [
  { first: 'Anna', last: 'Smith' },
  { first: 'Annabelle', last: 'Stone' },
  { first: 'Andy', last: 'Brown' },
  { first: 'Ben', last: 'Johnson' },
  { first: 'Benjamin', last: 'Lee' },
  { first: 'Bella', last: 'Lopez' },
  { first: 'Brian', last: 'Adams' },
  { first: 'Chris', last: 'Taylor' },
  { first: 'Christian', last: 'Thompson' },
  { first: 'Cindy', last: 'Wilson' }
]

class TrieNode3 {
  children: Record<string, TrieNode3>
  ob: People[]
  isEnd: boolean

  constructor() {
    this.children = {}
    this.ob = []
    this.isEnd = false
  }
}

class Trie3 {
  root: TrieNode3

  constructor() {
    this.root = new TrieNode3()
  }

  insert(word: string, ob: People) {
    let curr = this.root
    const lowerCaseWord = word.toLowerCase()

    for (const char of lowerCaseWord) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode3()
      }
      curr = curr.children[char]
    }

    curr.ob.push(ob)
    curr.isEnd = true
  }

  getMatchingWords(word: string) {
    let curr = this.root
    const lowerCaseWord = word.toLowerCase()

    for (const char of lowerCaseWord) {
      if (!(char in curr.children)) return []
      curr = curr.children[char]
    }

    return this.collect(curr)
  }

  collect(node: TrieNode3): People[] {
    let res: People[] = [...node.ob]

    for (const child of Object.keys(node.children)) {
      res = res.concat(this.collect(node.children[child]))
    }

    return res
  }
}

const trie = new Trie3()

for (const person of people) {
  trie.insert(person.first, person)
  trie.insert(person.last, person)
}

const res = trie.getMatchingWords('l')

const arr: { name: string; ob: People }[] = []

for (const person of people) {
  arr.push({ name: person.first.toLowerCase(), ob: person })
  arr.push({ name: person.last.toLowerCase(), ob: person })
}

arr.sort((a, b) => a.name.localeCompare(b.name))

const search = (word: string) => {
  const lower = word.toLowerCase()
  const startIndex = getLeftBound(lower)
  const res = []

  for (let i = startIndex; i < arr.length; i++) {
    if (!arr[i].name.startsWith(word)) break

    res.push(arr[i].ob)
  }

  return res
}

const getLeftBound = (word: string) => {
  const lower = word.toLowerCase()

  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid].name < lower) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return left
}

console.log(search('an'))
