export default class Stack<T> {
  private stack: Array<T>;
  private MAX_SIZE: number;
  constructor(maxSize: number = 10) {
    this.MAX_SIZE = maxSize;
    this.stack = [];
  }

  get length(): number {
    return this.stack.length;
  }

  /**
   * push
   */
  public push(ele: T): void {
    if (this.isFull()) {
      throw new Error('stack is full');
    }
    this.stack.unshift(ele);
  }

  /**
   * pop
   */
  public pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.shift();
  }

  /**
   * peek
   */
  public peek(): T | undefined {
    return this.stack[0];
  }

  /**
   * isFull
   */
  public isFull(): boolean {
    return this.stack.length === this.MAX_SIZE;
  }

  /**
   * isEmpty
   */
  public isEmpty(): boolean {
    return !this.stack.length;
  }

}