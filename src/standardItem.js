const Item = require('./item.js')

class StandardItem extends Item {
  update() {
    this.sellIn--

    if (this.quality > 0) this.quality--

    if (this.quality > 0 && this.sellIn < 0) this.quality--
  }
}

module.exports = StandardItem
