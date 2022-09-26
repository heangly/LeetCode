// https://leetcode.com/problems/design-an-ordered-stream/
// Time: O(n) || Space:O(n)

class OrderedSteam {
  constructor() {
    this.stream = {}
    this.pointer = 1
  }

  insert(id, val) {
    this.stream[id] = val
    const output = []

    if (id === this.pointer) {
      let key = this.pointer

      while (key in this.stream) {
        output.push(this.stream[key])
        key++
      }

      this.pointer = key
    }

    return output
  }
}

const orderedStream = new OrderedSteam()
console.log(orderedStream.insert(3, 'ccccc'))
console.log(orderedStream.insert(1, 'aaaaa'))
console.log(orderedStream.insert(2, 'bbbbb'))
console.log(orderedStream.insert(5, 'eeeee'))
console.log(orderedStream.insert(4, 'ddddd'))

// [], aaaa, bbbb cccc ,
/**
 *    ptr = 3
 *    
 * 
 *    stream = {
 *      1: 'aaaa'
 *      2: 'bbbb'
 *      3: 'cccc'

 * 
 * 
 * 
 *    }
 *    
 *      
 * 
 * 
 */
