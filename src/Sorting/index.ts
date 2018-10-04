export enum Order {
  asc,
  desc
}

export default class Sorting {
  private static swap(array: number[], index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  static bubble(original: number[], order: Order): number[] {
    const array = Array.from(original);
    for (let i = 0, len = array.length; i < len - 1; i++) {
      let isSwapped = false;

      for (let j = 0, max = len - i - 1; j < max; j++) {
        if (order === Order.asc && array[j] > array[j + 1]) {
          isSwapped = true;
          this.swap(array, j, j + 1);
        } else if (order === Order.desc && array[j] < array[j + 1]) {
          isSwapped = true;
          this.swap(array, j, j + 1);
        }
      }
      if (!isSwapped) {
        break;
      }
    }
    return array;
  }

  static insert(original: number[], order: Order): number[] {
    const array = Array.from(original);
    for (let i = 0, len = array.length; i < len - 1; i++) {
      if (order === Order.asc && array[i] > array[i + 1]) {
        this.swap(array, i, i + 1);
      } else if (order === Order.desc && array[i] < array[i + 1]) {
        this.swap(array, i, i + 1);
      }
      for (let j = i - 1; j >= 0; j--) {
        if (order === Order.asc && array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
        } else if (order === Order.desc && array[j] < array[j + 1]) {
          this.swap(array, j, j + 1);
        }
      }
    }
    return array;
  }

  static select(original: number[], order: Order): number[] {
    const array = Array.from(original);
    for (let i = 0, len = array.length; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (order === Order.asc && array[i] > array[j]) {
          this.swap(array, i, j);
        } else if (order === Order.desc && array[i] < array[j]) {
          this.swap(array, i, j);
        }
      }
    }
    return array;
  }

  static merge(original: number[], order: Order): number[] {
    const array = Array.from(original);

    return array;
  }

  static shell(original: number[], order: Order): number[] {
    const array = Array.from(original);

    return array;
  }

  static quick(original: number[], order: Order): number[] {
    const array = Array.from(original);

    return array;
  }
}
