const Item = require('./item.js')

class AgedBrie extends Item {
  update() {
    this.sellIn--

    if (this.quality < 50) this.quality++

    if (this.sellIn < 0 && this.quality < 50) this.quality++
  }
}

module.exports = AgedBrie
