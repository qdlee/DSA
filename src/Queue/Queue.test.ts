import Queue from './Queue';

test('new queue is empty', () => {
  const queue = new Queue();
  expect(queue.isEmpty()).toStrictEqual(true);
});

test('queue with one or more elements is not empty', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  expect(queue.isEmpty()).toStrictEqual(false);
});

test('new queue is not full', () => {
  const queue = new Queue();
  expect(queue.isFull()).toStrictEqual(false);
});

test('queue with one element is not full', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  expect(queue.isFull()).toStrictEqual(false);
});

test('length of the elements of the queue is equal to MAX_SIZE is full ', () => {
  const queue = new Queue<number>(3);
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.isFull()).toStrictEqual(true);
});

test('if the queue is empty, peek return undefined', () => {
  const queue = new Queue<number>();
  expect(queue.peek()).toStrictEqual(undefined);
});

test('peek one element, return the element and the length of the queue change', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.peek()).toStrictEqual(1);
  expect(queue.length).toStrictEqual(2);
});

test('enqueue one element', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  expect(queue.length).toStrictEqual(1);
});

test('enqueue two elements', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.length).toStrictEqual(2);
});

test('if the queue is full, throw an error', () => {
  const queue = new Queue<number>(2);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.enqueue).toThrow();
});

test('if the queue is empty, dequeue returns undefined', () => {
  const queue = new Queue();
  expect(queue.dequeue()).toStrictEqual(undefined);
});

test('dequeue one element', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.dequeue()).toStrictEqual(1);
  expect(queue.length).toStrictEqual(1);
});