class Bag {
  constructor() {
    this.bag = [];
  }

  add(...items) {
    this.bag.push(...items);
  }

  *[Symbol.iterator]() {
    for (const item of this.bag) {
      yield item;
    }
  }
}

export { Bag };
