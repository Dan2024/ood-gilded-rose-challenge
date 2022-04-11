const Item = require('./item.js')

class BackStagePass extends Item {
  // constructor(name, sellIn, quality) {
  //   this.name = name
  //   this.sellIn = sellIn
  //   this.quality = quality
  // }

  update() {
    this.sellIn--

    if (this.quality < 50) this.quality++

    if (this.quality < 50 && this.sellIn < 11) this.quality++

    if (this.quality < 50 && this.sellIn < 6) this.quality++

    if (this.sellIn < 0) this.quality = 0
  }
}

module.exports = BackStagePass
