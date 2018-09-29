export default class MyArray<T> {
  private data: Array<any>;
  constructor() {
    this.data = [1, 3, 5, 7, 8];
  }

  insert(index: number, value: T): Array<T> {
    let len = this.data.length;
    let tempIndex = len - 1;
    this.data.length = len;
    while (tempIndex >= index) {
      this.data[tempIndex + 1] = this.data[tempIndex];
      tempIndex--;
    }
    this.data[index] = value;
    return this.data;
  }

  delete(index: number): T {
    let len = this.data.length;
    let tempIndex = index;
    let value = this.data[index];
    while (tempIndex < len) {
      this.data[tempIndex] = this.data[++tempIndex];
    }
    this.data.length = len - 1;
    return value;
  }

  search(ele: T): number {
    let position = -1;
    let len = this.data.length;
    let i = 0;

    while (i < len) {
      if (this.data[i] === ele) {
        position = i;
        break;
      }
      i++;
    }
    return position;
  }
  update(index: number, value: T): Array<T> {
    this.data[index] = value;
    return this.data;
  }
}
