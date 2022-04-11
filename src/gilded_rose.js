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

    if (item.quality > 0) item.quality = item.quality - 2
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
        // if (
        //   // if item name is not brie or backstage pass (increasers)
        //   item.name != 'Aged Brie' &&
        //   item.name != 'Backstage passes to a TAFKAL80ETC concert'
        // ) {
        //   // item quality greater than 0 and item name is not sulfuras (non changer) - decrease item quality by one
        //   if (item.quality > 0) {
        //     if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //       item.quality = item.quality - 1
        //     }
        //   }
        // } else {
        //   // if item quality less than 50 increase item quality by one
        //   if (item.quality < 50) {
        //     item.quality = item.quality + 1
        //     if (
        //       // if item name is backstage pass
        //       item.name == 'Backstage passes to a TAFKAL80ETC concert'
        //     ) {
        //       // if sellin in 10 or less ( removed: and quality is less than 50) increase item quality again
        //       if (item.sellIn < 11) {
        //         if (item.quality < 50) {
        //           item.quality = item.quality + 1
        //         }
        //       }
        //       // if sellin is 5 or less increase item quality again
        //       if (item.sellIn < 6) {
        //         if (item.quality < 50) {
        //           item.quality = item.quality + 1
        //         }
        //       }
        //     }
        //   }
        // }
        // // if item name isnt sulfuras then decrement sellin
        // if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //   item.sellIn = item.sellIn - 1
        // }
        // // if item sellin less than 0 AND item isnt aged brie AND item name isnt backstage pass
        // if (item.sellIn < 0) {
        //   if (item.name != 'Aged Brie') {
        //     if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        //       // if item quality greater than 0 then decrement quality by one - as long as item quality isnt 0 decrement
        //       if (item.quality > 0) {
        //         // if (item.name != 'Sulfuras, Hand of Ragnaros') {
        //         item.quality = item.quality - 1
        //         // }
        //       }
        //     } else {
        //       // if sell in is less than 0 for backstage passes quality = 0
        //       item.quality = item.quality - item.quality
        //     }
        //   } else {
        //     // if quality is less than 50 increment quality
        //     if (item.quality < 50) {
        //       item.quality = item.quality + 1
        //     }
        //   }
        // }
      }
    }

    return this.items
  }
}
module.exports = {
  Item,
  Shop
}
