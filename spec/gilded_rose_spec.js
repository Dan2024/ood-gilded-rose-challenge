const Shop = require('../src/gildedRose.js')
const Sulfuras = require('../src/sulfuras.js')
const BackStagePass = require('../src/backstagepass.js')
const ConjuredItem = require('../src/conjureditem.js')
const AgedBrie = require('../src/agedbrie.js')
const StandardItem = require('../src/standarditem.js')
const Item = require('../src/item.js')

describe('Gilded Rose', function () {
  describe('updateQuality()', function () {
    it('should push an item to the items array and depricate the sellIn and quality values by 1 ', function () {
      const gildedRose = new Shop([new StandardItem('testItem', 1, 1)])
      const items = gildedRose.updateQuality()

      expect(items[0].name).toEqual('testItem')
      expect(items[0].sellIn).toEqual(0)
      expect(items[0].quality).toEqual(0)
    })

    it('should degrade the quality twice as fast once the sell by date has passed (sellIn is a negative or equal to 0)', function () {
      const gildedRose = new Shop([new StandardItem('testItem', 0, 10)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toEqual(-1)
      expect(items[0].quality).toEqual(8)
    })

    it('should never let the quality of an item be a negative value', function () {
      const gildedRose = new Shop([new StandardItem('testItem', 0, 0)])
      const items = gildedRose.updateQuality()

      expect(items[0].sellIn).toEqual(-1)
      expect(items[0].quality).toEqual(0)
    })

    describe('Aged Brie', function () {
      it('Aged Brie increases in quality over time ', function () {
        const gildedRose = new Shop([new AgedBrie('Aged Brie', 5, 0)])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(4)
        expect(items[0].quality).toEqual(1)
      })

      it('Aged Brie increases by 2 past its sell in', function () {
        const gildedRose = new Shop([new AgedBrie('Aged Brie', 0, 0)])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(2)
      })

      it('The Quality of an item can not increase past 50 ', function () {
        const gildedRose = new Shop([new AgedBrie('Aged Brie', 0, 50)])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(50)
      })
    })

    // sulfuras should be 80???
    describe('Legendary Items', function () {
      it('Sulfuras, being a legendary item, never depricates its buy in or quality value', function () {
        const gildedRose = new Shop([
          new Sulfuras('Sulfuras, Hand of Ragnaros', 10, 80)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(0)
        expect(items[0].quality).toEqual(80)
      })
    })

    describe('backstage passes', function () {
      it('Backstage pases quality increases by 1 when there are over 10 days to sell', function () {
        const gildedRose = new Shop([
          new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 15, 0)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(14)
        expect(items[0].quality).toEqual(1)
      })

      it('Backstage pases quality increases by 2 when there are 10 days or less to sell', function () {
        const gildedRose = new Shop([
          new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 10, 0)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(9)
        expect(items[0].quality).toEqual(2)
      })

      it('Backstage pases quality increases by 3 when there are 5 days or less to sell', function () {
        const gildedRose = new Shop([
          new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 5, 0)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(4)
        expect(items[0].quality).toEqual(3)
      })

      it('Backstage pases quality drops to 0 after the concert (sell in is negative)', function () {
        const gildedRose = new Shop([
          new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 0, 10)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(0)
      })
    })

    describe('Conjured Items', function () {
      it('conjured items degrade in Quality twice as fast as normal items', function () {
        const gildedRose = new Shop([
          new ConjuredItem('Conjured Mana Cake', 10, 10)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(9)
        expect(items[0].quality).toEqual(8)
      })
    })

    describe('Conjured Items', function () {
      it('conjured items quality dont go below 0', function () {
        const gildedRose = new Shop([
          new ConjuredItem('Conjured Mana Cake', 10, 1)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(9)
        expect(items[0].quality).toEqual(0)
      })
    })

    describe('Conjured Items', function () {
      it('conjured items degrade twice as fast past sell by date', function () {
        const gildedRose = new Shop([
          new ConjuredItem('Conjured Mana Cake', 0, 10)
        ])
        const items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(-1)
        expect(items[0].quality).toEqual(6)
      })
    })
  })
})

describe('Gilded Rose days', function () {
  it('Day 1: should update all items', function () {
    const startingItems = [
      new StandardItem('+5 Dexterity Vest', 10, 20),
      new AgedBrie('Aged Brie', 2, 0),
      new StandardItem('Elixir of the Mongoose', 5, 7),
      new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
      new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new ConjuredItem('Conjured Mana Cake', 3, 6)
    ]

    const gildedRose = new Shop(startingItems)
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(19)
    // Aged Brie
    expect(items[1].sellIn).toEqual(1)
    expect(items[1].quality).toEqual(1)
    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(4)
    expect(items[2].quality).toEqual(6)
    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)
    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(0)
    expect(items[4].quality).toEqual(80)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(14)
    expect(items[5].quality).toEqual(21)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(9)
    expect(items[6].quality).toEqual(50)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(4)
    expect(items[7].quality).toEqual(50)
    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(2)
    expect(items[8].quality).toEqual(4)
  })

  it('Day 30: should update all items', function () {
    const startingItems = [
      new StandardItem('+5 Dexterity Vest', 10, 20),
      new AgedBrie('Aged Brie', 2, 0),
      new StandardItem('Elixir of the Mongoose', 5, 7),
      new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
      new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new BackStagePass('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new ConjuredItem('Conjured Mana Cake', 3, 6)
    ]

    const gildedRose = new Shop(startingItems)
    for (let i = 0; i < 29; i++) {
      gildedRose.updateQuality()
    }
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(-20)
    expect(items[0].quality).toEqual(0)
    // Aged Brie
    expect(items[1].sellIn).toEqual(-28)
    expect(items[1].quality).toEqual(50)
    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(-25)
    expect(items[2].quality).toEqual(0)
    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)
    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(0)
    expect(items[4].quality).toEqual(80)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(-15)
    expect(items[5].quality).toEqual(0)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(-20)
    expect(items[6].quality).toEqual(0)
    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(-25)
    expect(items[7].quality).toEqual(0)
    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(-27)
    expect(items[8].quality).toEqual(0)
  })
})
