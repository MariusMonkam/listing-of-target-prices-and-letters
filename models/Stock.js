// models/Stock.js
class Stock {
  constructor(stock, targetPrice, letter) {
    this.stock = stock;
    this.targetPrice = targetPrice;
    this.letter = letter;
  }
}

module.exports = Stock;
