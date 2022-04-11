const Item = require('./item.js')

class Sulfuras extends Item {
  // constructor(name, sellIn, quality) {
  //   this.name = name
  //   this.sellIn = sellIn
  //   this.quality = quality
  // }

  update() {
    this.quality = 80
    this.sellIn = 0
  }
}

module.exports = Sulfuras
