// https://leetcode.com/problems/stock-price-fluctuation/

//TODO: LEARN ABOUT HEAP (min & max)

class StockPrice {
  prices: { [key: number]: number } = {}
  lastestTimestamp: number
  minValue: number
  maxValue: number

  constructor() {
    this.prices = {}
    this.lastestTimestamp = 0
    this.minValue = Infinity
    this.maxValue = -Infinity
  }

  update(timestamp: number, price: number): void {
    this.prices[timestamp] = price

    this.lastestTimestamp = Math.max(this.lastestTimestamp, timestamp)

    const allValues = Object.values(this.prices)

    this.minValue = Infinity
    this.maxValue = -Infinity

    for (const value of allValues) {
      this.minValue = Math.min(this.minValue, value)
      this.maxValue = Math.max(this.maxValue, value)
    }

    // console.log('')
    // console.log('==========')
    // console.log(this.prices)
    // console.log(this.minValue)
    // console.log(this.maxValue)
    // console.log('==========')
    // console.log('')
  }

  current(): number {
    return this.prices[this.lastestTimestamp]
  }

  maximum(): number {
    return this.maxValue
  }

  minimum(): number {
    return this.minValue
  }
}

const stockPrices = new StockPrice()
stockPrices.update(1, 10)
stockPrices.update(2, 5)
console.log(stockPrices.current())
console.log(stockPrices.maximum())
stockPrices.update(1, 3)
console.log(stockPrices.maximum())
stockPrices.update(4, 2)
console.log(stockPrices.minimum())
