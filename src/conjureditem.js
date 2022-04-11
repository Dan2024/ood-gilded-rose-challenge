class ConjuredItem {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  update() {
    this.sellIn--

    if (this.quality > 0) this.quality -= 2
  }
}

module.exports = ConjuredItem
