import { convert } from './Expression';

/**
 * 
1	a + b	===>	a b +
2	(a + b) ∗ c	===>	a b + c ∗
3	a ∗ (b + c)	===>	a b c + ∗
4	a / b + c / d	===>	a b / c d / +
5	(a + b) ∗ (c + d)	===>	a b + c d + ∗
6	((a + b) ∗ c) - d	===>	a b + c ∗ d -
 */

test('index to postfix 1 + 2', () => {
  let infix = '1 + 2';
  expect(convert(infix)).toStrictEqual('12+');
});

// test('index to postfix 1 / 2 + 3 / 4', () => {
//   let infix = '1 / 2 + 3 / 4';
//   expect(convert(infix)).toStrictEqual('12/34/+');
// });
