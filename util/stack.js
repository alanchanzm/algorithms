class Stack {
  constructor() {
    this.stack = [];
  }

  static of() {
    return new Stack();
  }

  get size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(...items) {
    this.stack.push(...items);
  }

  pop() {
    this.stack.pop();
  }

  *[Symbol.iterator]() {
    for (let i = this.size - 1; i >= 0; i -= 1) {
      yield this.stack[i];
    }
  }
}

export { Stack };
