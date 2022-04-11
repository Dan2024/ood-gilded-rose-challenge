class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateAgedBrie(item) {
    item.sellIn--

    if (item.quality < 50) item.quality++

    if (item.sellIn < 0 && item.quality < 50) item.quality++
  }

  updateBackstagePass(item) {
    item.sellIn--

    if (item.quality < 50) item.quality++

    if (item.quality < 50 && item.sellIn < 11) item.quality++

    if (item.quality < 50 && item.sellIn < 6) item.quality++

    if (item.sellIn < 0) item.quality = 0
  }

  updateSulfuras(item) {
    item.quality = 80
    item.sellIn = 0
  }

  updateConjured(item) {
    item.sellIn--

    if (item.quality > 0) item.quality -= 2
  }

  updateNormalItem(item) {
    item.sellIn--

    if (item.quality > 0) item.quality--

    if (item.quality > 0 && item.sellIn < 0) item.quality--
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]

      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePass(item)
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        this.updateSulfuras(item)
      } else if (item.name.startsWith('Conjured')) {
        this.updateConjured(item)
      } else {
        this.updateNormalItem(item)
      }
    }

    return this.items
  }
}
module.exports = Shop
