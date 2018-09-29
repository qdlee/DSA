class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}

export default class CircularLinkedList<T> {
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

  unshift(data: T): number {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.last = node;
      this.last.next = this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.last.next = node;
    }
    this.length = this.length + 1;
    return this.length;
  }

  shift(): T {
    let data;
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.head.next === this.head) {
      data = this.head.data;
      this.head = null;
      this.last = null;
      this.length = this.length - 1;
      return data;
    }
    let newHead = this.head.next;
    data = this.head.data;
    this.head.next = null;
    this.head = newHead;
    this.last.next = this.head;
    this.length = this.length - 1;
    return data;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '[]';
    }
    let first = this.head;
    let current = this.head;
    let result = '';
    do {
      result += current.data + ', ';
      current = current.next;
    } while (current !== first);
    return ['[', result.slice(0, -2), ']'].join(' ');
  }
}
