/**
 * array Stack
 */
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
    return this.stack.pop();
  }

  *[Symbol.iterator]() {
    for (let i = this.size - 1; i >= 0; i -= 1) {
      yield this.stack[i];
    }
  }
}

/**
 * linkedList Stack
 */
// class Node {
//   constructor(item = null, next = null) {
//     this.item = item;
//     this.next = next;
//   }
// }
// class Stack {
//   constructor() {
//     this.first = null;
//     this.length = 0;
//   }

//   static of() {
//     return new Stack();
//   }

//   get size() {
//     return this.length;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   push(...items) {
//     items.forEach(item => {
//       const oldFirst = this.first;
//       this.first = new Node(item, oldFirst);
//       this.length += 1;
//     });
//   }

//   pop() {
//     if (this.size < 1) return undefined;

//     const { item } = this.first;
//     this.first = this.first.next;
//     this.length -= 1;
//     return item;
//   }

//   *[Symbol.iterator]() {
//     let current = this.first;
//     while (current) {
//       yield current.item;
//       current = current.next;
//     }
//   }
// }

export { Stack };
