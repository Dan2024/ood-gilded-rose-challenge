class Sulfuras {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  update(item) {
    this.quality = 80
    this.sellIn = 0
  }
}

module.exports = Sulfuras
