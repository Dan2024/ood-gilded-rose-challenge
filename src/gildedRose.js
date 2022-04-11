class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (const item of this.items) {
      item.update()
    }

    return this.items
  }
}
module.exports = Shop
