import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Should reduceQuality by 1", () => {
    const gildedRose = new GildedRose([new Item("foo", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(29);
  });
  it("Should reduceQuality by 2 if selling is negative", () => {
    const gildedRose = new GildedRose([new Item("foo", -1, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  });
  it("Should reduceQuality return 0 if the quality is recived on 0", () => {
    const gildedRose = new GildedRose([new Item("foo", -1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  describe("Should reduceQuality by double the ammount if the item is Conjured", () => {
    it("Should reduce by 2 if the sellin is positive", () => {
      const gildedRose = new GildedRose([new Item("Conjured", 10, 12)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(10);
    });
    it("Should reduce by 4 if the sellin is negative", () => {
      const gildedRose = new GildedRose([new Item("Conjured", -1, 14)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(10);
    });
  });
});
