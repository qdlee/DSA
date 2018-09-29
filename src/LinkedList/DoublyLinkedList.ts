class Node<T> {
  prev: Node<T>;
  next: Node<T>;
  data: T;
  constructor(data: T, prev: Node<T> = null, next: Node<T> = null) {
    this.prev = prev;
    this.next = next;
    this.data = data;
  }
}

export default class DoublyLinkedList<T> {
  head: Node<T>;
  last: Node<T>;
  length: number;
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  push(data: T): number {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.last = node;
    } else {
      node.prev = this.last;
      this.last.next = node;
      this.last = node;
    }
    this.length = this.length + 1;
    return this.length;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let data = this.last.data;
    let temp = this.last.prev;
    this.last.prev.next = null;
    this.last.prev = null;
    this.last = temp;
    this.length = this.length - 1;
    return data;
  }

  unshift(data: T): number {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.last = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length = this.length + 1;
    return this.length;
  }

  shift(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let data = this.head.data;
    let temp = this.head.next;
    this.head.next.prev = null;
    this.head.next = null;
    this.head = temp;
    this.length = this.length - 1;
    return data;
  }

  indexOf(data: T): number {
    if (this.isEmpty()) {
      return;
    }
    let i = this.length - 1;
    let current = this.last;
    let index = -1;
    while (current) {
      if (current.data === data) {
        index = i;
        break;
      }
      current = current.prev;
      i--;
    }

    return index;
  }

  reverse(): DoublyLinkedList<T> {
    if (this.isEmpty()) {
      return;
    }
    if (this.length === 1) {
      return;
    }

    let prev = null;
    let current = this.head;
    while (current) {
      let temp = current.next;
      current.next = prev;
      if (prev) {
        prev.prev = current;
      }
      prev = current;
      current = temp;
    }
    let tempLast = this.head;
    this.head = this.last;
    this.last = tempLast;
    return this;
  }

  delete(index: number): T {
    if (this.isEmpty()) {
      return undefined;
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let i = 0;
    let current = this.head;
    let data;
    while (current) {
      if (i === index) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.prev = null;
        current.next = null;
        this.length = this.length - 1;
        data = current.data;
        break;
      }
      i++;
      current = current.next;
    }
    return data;
  }

  /**
   * display all of the values
   */
  toString(): string {
    let result = '';
    let node = this.head;
    while (node) {
      result += node.data.toString() + ', ';
      node = node.next;
    }
    return result.slice(0, -2);
  }
}
