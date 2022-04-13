const Item = require('./item.js')

class ConjuredItem extends Item {
  update() {
    this.sellIn--
    this.quality -= 2
    if (this.sellIn < 0) this.quality -= 2
    if (this.quality < 0) this.quality = 0
  }
}

module.exports = ConjuredItem
