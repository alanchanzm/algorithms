class Queue {
  constructor() {
    this.queue = [];
  }

  get size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(...item) {
    this.queue.push(...item);
  }

  dequeue() {
    return this.queue.shift();
  }
}

export { Queue };
