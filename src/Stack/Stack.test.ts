import Stack from './Stack';

test('new stack is empty', () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toStrictEqual(true);
});

test('stack that has elements is not empty', () => {
  const stack = new Stack<number>();
  stack.push(1);
  expect(stack.isEmpty()).toStrictEqual(false);
});

test('new stack is not full', () => {
  const stack = new Stack();
  expect(stack.isFull()).toStrictEqual(false);
});

test('stack with one element is not full', () => {
  const stack = new Stack<number>();
  stack.push(1);
  expect(stack.isFull()).toStrictEqual(false);
});

test('length of the elements is one less than the MAX_SIZE of the stack, stack is not full', () => {
  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  expect(stack.isFull()).toStrictEqual(false);
});

test('length of the elements is equal to the MAX_SIZE of the stack, stack is full', () => {
  const stack = new Stack<number>(3);
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.isFull()).toStrictEqual(true);
});


test('push one element', () => {
  const stack = new Stack<number>();
  stack.push(1);
  expect(stack.length).toStrictEqual(1);
});

test('push two elements', () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  expect(stack.length).toStrictEqual(2);
});

test('stack is full, throw error', () => {
  const stack = new Stack<number>(2);
  stack.push(1);
  stack.push(2);
  expect(stack.push).toThrow();
});

test('stack is empty, pop return undefined', () => {
  const stack = new Stack();
  expect(stack.pop()).toStrictEqual(undefined);
});

test('pop element', () => {
  const stack = new Stack<number>(2);
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toStrictEqual(2);
  expect(stack.length).toStrictEqual(1);
});

test('stack is empty, peek return undefined', () => {
  const stack = new Stack();
  expect(stack.peek()).toStrictEqual(undefined);
});

test('peek one element', () => {
  const stack = new Stack<number>(2);
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toStrictEqual(2);
  expect(stack.length).toStrictEqual(2)
})

