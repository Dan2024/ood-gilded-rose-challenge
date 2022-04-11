const Item = require('./item.js')

class Sulfuras extends Item {
  update() {
    this.quality = 80
    this.sellIn = 0
  }
}

module.exports = Sulfuras
