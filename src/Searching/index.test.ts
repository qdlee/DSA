import Searching from './index';

const number = 87;
const result = '9,12,32,34,45,56,78,87,123,314';

test('linear searching can find', () => {
  const numbers = [12, 32, 9, 45, 34, 87, 123, 314, 56, 78];
  expect(Searching.linear(numbers, 56)).toStrictEqual(8);
});

test("linear searching can't find", () => {
  const numbers = [12, 32, 9, 45, 34, 87, 123, 314, 56, 78];
  expect(Searching.linear(numbers, 400)).toStrictEqual(-1);
});

test('binary searching can find', () => {
  const numbers = [9, 12, 32, 34, 45, 56, 78, 87, 123, 314];
  expect(Searching.binary(numbers, 34)).toStrictEqual(3);
});

test('binary searching can find', () => {
  const numbers = [9, 12, 32, 34, 45, 56, 78, 87, 123, 314];
  expect(Searching.binary(numbers, 78)).toStrictEqual(6);
});

test('binary searching can find', () => {
  const numbers = [9, 12, 32, 34, 45, 56, 78, 87, 123, 314];
  expect(Searching.binary(numbers, 56)).toStrictEqual(5);
});

test("binary searching can't find", () => {
  const numbers = [9, 12, 32, 34, 45, 56, 78, 87, 123, 314];
  expect(Searching.binary(numbers, 400)).toStrictEqual(-1);
});

test('interpolation searching can find', () => {
  const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18];
  expect(Searching.interpolation(numbers, 8)).toStrictEqual(3);
});

test('interpolation searching can find', () => {
  const numbers = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
  expect(Searching.interpolation(numbers, 26)).toStrictEqual(3);
});

test('interpolation searching can find', () => {
  const numbers = [9, 12, 32, 34, 45, 56, 78, 87, 123, 314];
  expect(Searching.interpolation(numbers, 45)).toStrictEqual(4);
});
