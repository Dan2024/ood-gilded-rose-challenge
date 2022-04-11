const Item = require('./item.js')

class AgedBrie extends Item {
  // constructor(name, sellIn, quality) {
  //   this.name = name
  //   this.sellIn = sellIn
  //   this.quality = quality
  // }

  update() {
    this.sellIn--

    if (this.quality < 50) this.quality++

    if (this.sellIn < 0 && this.quality < 50) this.quality++
  }
}

module.exports = AgedBrie
