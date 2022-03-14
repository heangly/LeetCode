const suggestedProducts = (
  products: string[],
  searchWord: string
): string[][] => {
  const res: string[][] = []

  products.sort()
  let prefix = ''

  for (const word of searchWord) {
    prefix += word
    const temp: string[] = []
    for (const product of products) {
      if (temp.length >= 3) break
      if (product.startsWith(prefix)) {
        temp.push(product)
      }
    }
    res.push(temp)
  }

  return res
}

console.log(
  suggestedProducts(
    ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'],
    'mouse'
  )
)
