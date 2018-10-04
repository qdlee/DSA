import Sorting, { Order } from './index';
const original = [14, 33, 27, 10, 35, 19, 42, 44];
const ascTarget = [10, 14, 19, 27, 33, 35, 42, 44];
const descTarget = Array.from(ascTarget).reverse();

test('bubble: asc', () => {
  expect(Sorting.bubble(original, Order.asc)).toEqual(ascTarget);
});

test('bubble: desc', () => {
  expect(Sorting.bubble(original, Order.desc)).toEqual(descTarget);
});

test('insert: asc', () => {
  expect(Sorting.insert(original, Order.asc)).toEqual(ascTarget);
});

test('insert: desc', () => {
  expect(Sorting.insert(original, Order.desc)).toEqual(descTarget);
});

test('select: asc', () => {
  expect(Sorting.select(original, Order.asc)).toEqual(ascTarget);
});

test('select: desc', () => {
  expect(Sorting.select(original, Order.desc)).toEqual(descTarget);
});
