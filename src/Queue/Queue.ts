export default class Queue<T> {
  private queue: Array<T>;
  private MAX_SIZE: number;

  constructor(maxSize: number = 10) {
    this.MAX_SIZE = maxSize;
    this.queue = [];
  }

  get length(): number {
    return this.queue.length;
  }

  public isEmpty(): boolean {
    return !this.queue.length;
  }

  public isFull(): boolean {
    return this.length === this.MAX_SIZE;
  }

  public peek(): T | undefined {
    return this.queue[0];
  }

  public enqueue(element: T): void {
    if (this.isFull()) {
      throw new Error('queue is full');
    }

    this.queue.push(element);
  }

  public dequeue(): T | undefined {
    return this.queue.shift();
  }
}