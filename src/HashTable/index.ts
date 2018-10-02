class DataItem {
  key: number;
  data: number;

  constructor(key: number, data: number) {
    this.key = key;
    this.data = data;
  }
}

export default class HashTable {
  private SIZE: number = 20;
  items: DataItem[];

  constructor() {
    this.items = [];
  }

  private isFull() {
    for (let i = 0; i < this.SIZE; i++) {
      if (!this.items[i]) {
        return false;
      }
    }
    return true;
  }

  private hashCode(key: number): number {
    return key % this.SIZE;
  }

  insert(item: DataItem): number {
    if (this.isFull()) {
      throw new Error('hash table is already full');
    }
    let hashIndex = this.hashCode(item.key);
    while (this.items[hashIndex]) {
      hashIndex += 1;
      hashIndex %= this.SIZE;
    }
    this.items[hashIndex] = item;
    return hashIndex;
  }

  search(key: number): DataItem | null {
    let hashIndex = this.hashCode(key);
    while (this.items[hashIndex]) {
      if (this.items[hashIndex].key === key) {
        return this.items[hashIndex];
      }
      hashIndex++;
      hashIndex %= this.SIZE;
    }
    return null;
  }

  delete(key: number): DataItem | null {
    let hashIndex = this.hashCode(key);
    while (this.items[hashIndex]) {
      if (this.items[hashIndex].key === key) {
        let item = this.items[hashIndex];
        this.items = undefined;
        return item;
      }
      hashIndex++;
      hashIndex %= this.SIZE;
    }
    return null;
  }

  toString(): string {
    const itemString = [];
    for (let item of this.items) {
      if (item) {
        itemString.push(`(${item.key},${item.data})`);
      }
    }
    return itemString.join(';');
  }
}
