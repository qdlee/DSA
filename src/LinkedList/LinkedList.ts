class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T, next: Node<T> = null) {
    this.data = data;
    this.next = next;
  }
}
export default class LinkedList<T> {
  head: Node<T>;
  last: Node<T>;
  length: number;
  constructor(...datas: T[]) {
    this.head = null;
    this.last = null;
    this.length = 0;
    datas.forEach(item => {
      this.push(item);
    });
  }

  /**
   * append a data at the end of the linked list
   * @param {*} data
   */
  push(data: T): number {
    let node = new Node(data, null);
    if (!this.head) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length = this.length + 1;
    return this.length;
  }

  /**
   * remove and return the last element from a linked list and change length
   * @returns removed element
   */
  pop(): T {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let data = this.head.data;
      this.head = null;
      this.last = null;
      this.length = 0;
      return data;
    }
    let node = this.head;
    let prev = null;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
    this.last = prev;
    this.length = this.length - 1;
    return node.data;
  }

  /**
   * prepend a data at the beginning of the linked list
   * @param {*} data
   * @returns length
   */
  unshift(data: T): number {
    let node = new Node(data, null);
    if (!this.head) {
      this.head = node;
      this.last = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length = this.length + 1;
    return this.length;
  }

  /**
   * remove and return the head element from a linked list and change length
   */
  shift(): T {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let data = this.head.data;
      this.head = null;
      this.last = null;
      this.length = 0;
      return data;
    }
    let data = this.head.data;
    this.head = this.head.next;
    this.length = this.length - 1;
    return data;
  }

  /**
   * return the index of the data in a linked list
   * @param {*} data
   * @returns index | -1
   */
  indexOf(data: T): number {
    let node = this.head;
    let i = 0;
    let length = this.length;
    let index = -1;
    do {
      if (node.data === data) {
        index = i;
        break;
      }
      node = node.next;
      i++;
    } while (i < length);
    return index;
  }

  /**
   * reverses a linked list. The head element becomes the last,
   * and the last element becomes the head
   * @returns the reversed linked list
   */
  reverse(): LinkedList<T> {
    if (this.length <= 1) {
      return;
    }
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.last = this.head;
    this.head = prev;
    return this;
  }

  /**
   * remove one element in index position
   * @param {*} index
   * @returns removed element
   */
  delete(index: number): T {
    if (!this.length) {
      return undefined;
    }
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let node = this.head;
    let i = 0;
    let removedNode = null;
    while (node) {
      if (i === index - 1) {
        // remove node
        removedNode = node.next;
        node.next = node.next.next;
        this.length = this.length - 1;
        break;
      }
      i++;
      node = node.next;
    }
    return removedNode.data;
  }

  /**
   * display all of the datas
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
