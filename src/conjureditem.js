const Item = require('./item.js')

class ConjuredItem extends Item {
  update() {
    this.sellIn--

    if (this.quality > 0) this.quality -= 2
  }
}

module.exports = ConjuredItem
