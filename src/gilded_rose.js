class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (
        // if item name is not brie or backstage pass (increasers)
        this.items[i].name != 'Aged Brie' &&
        this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        // item quality greater than 0 and item name is not sulfuras (non changer) - decrease item quality by one
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        // if item quality less than 50 increase item quality by one
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (
            // if item name is backstage pass
            this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            // if sellin in 10 or less ( removed: and quality is less than 50) increase item quality again
            if (this.items[i].sellIn < 11) {
              // if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
              // }
            }
            // if sellin is 5 or less increase item quality again
            if (this.items[i].sellIn < 6) {
              // if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
              // }
            }
          }
        }
      }
      // if item name isnt sulfuras then decrement sellin
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1
      }
      // if item sellin less than 0 AND item isnt aged brie AND item name isnt backstage pass
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (
            this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
          ) {
            // if item quality greater than 0 then decrement quality by one - as long as item quality isnt 0 decrement
            if (this.items[i].quality > 0) {
              // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1
              // }
            }
          } else {
            // if sell in is less than 0 for backstage passes quality = 0
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality
          }
        } else {
          // if quality is less than 50 increment quality
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items
  }
}
module.exports = {
  Item,
  Shop
}
