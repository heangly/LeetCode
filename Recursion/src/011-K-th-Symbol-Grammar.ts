/**
 * start with 0
 * replace  0 -> 01
 * replace  1 -> 10
 *
 * 0                  1
 * 01                 2
 * 0110               3
 * 01101001           4
 * 0110100110010110   5
 *
 */

const kthGrammar = (n: number, k: number): number => {
  if (n === 1) return 0

  var last = kthGrammar(n - 1, Math.ceil(k / 2))

  // we look at the previous n and replace each occurrence of 0 with 01 ,so If we get 0 from previous n
  if (last == 0) {
    // and if k is even we return 1 to next calling function
    if (k % 2 == 0) last = 1
  } else {
    // we look at the previous n and replace each occurrence of 1 with 10 ,so If we get 1 from previous n
    // and if k is even we return 0 to next calling function
    if (k % 2 == 0) last = 0
  }
  return last
}

console.log(kthGrammar(1, 1))
console.log(kthGrammar(2, 1))
console.log(kthGrammar(2, 2))
console.log(kthGrammar(3, 3))
console.log(kthGrammar(4, 4))
