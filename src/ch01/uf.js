class UF {
  constructor(n) {
    this.count = n;
    this.parent = [...Array(n)].forEach((_, i) => i);
    this.size = Array(n).fill(1);
  }

  get count() {
    return this.count;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  find(p) {
    const { parent } = this;
    while (p !== parent[p]) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;
  }

  union(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);
    if (pRoot === qRoot) return;

    const { parent, size } = this;
    if (size[pRoot] < size[qRoot]) {
      parent[pRoot] = qRoot;
      size[qRoot] += size[pRoot];
    } else {
      parent[qRoot] = pRoot;
      size[pRoot] += size[qRoot];
    }
    this.count -= 1;
  }
}

export { UF };
