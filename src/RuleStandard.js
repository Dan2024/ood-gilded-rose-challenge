// class RuleStandard {
//   constructor(item) {
//     this.item = item
//     this.specialItems = [
//       'Aged Brie',
//       'Backstage passes to a TAFKAL80ETC concert',
//       'Sulfuras, Hand of Ragnaros',
//       'conjured'
//     ]
//   }

//   update() {
//     const specialItemExists = this.specialItems.includes(this.item.name)

//     if (specialItemExists) return

//     if (this.item.quantity < 50) this.item.quantity += 1

//     this.item.sellIn -= 1
//   }
// }

// module.exports = RuleStandard
