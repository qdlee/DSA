export default class Searching {
  static linear(list: Array<any>, target: any): number {
    if (!list || !Array.isArray(list)) {
      return -1;
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i] === target) {
        return i;
      }
    }
    return -1;
  }

  static binary(list: Array<any>, target: any): number {
    if (!list || !Array.isArray(list)) {
      return -1;
    }
    let lower = 0;
    let high = list.length - 1;
    let middle;
    while (lower <= high) {
      middle = Math.floor((lower + high) / 2);
      const middleValue = list[middle];
      if (target === middleValue) {
        return middle;
      } else if (target < middleValue) {
        high = middle - 1;
      } else {
        lower = middle + 1;
      }
    }
    return -1;
  }

  static interpolation(list: Array<any>, target: any): number {
    let lower = 0;
    let high = list.length - 1;
    let middle;
    while (lower <= high) {
      middle = Math.floor(
        lower +
          ((high - lower) / (list[high] - list[lower])) * (target - list[lower])
      );
      if (target === list[middle]) {
        return middle;
      } else if (target < list[middle]) {
        high = middle - 1;
      } else {
        lower = middle + 1;
      }
    }
    return -1;
  }
}
