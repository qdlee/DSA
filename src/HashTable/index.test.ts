import HashTable from './index';

test('hash table insert', () => {
  const table = new HashTable();
  const index = table.insert({ key: 1, data: 11 });
  expect(table.items[index].key).toEqual(1);
});

test('hash table insert linear probing', () => {
  const table = new HashTable();
  const index = table.insert({ key: 1, data: 11 });
  const index1 = table.insert({ key: 21, data: 22 });
  expect(index + 1).toEqual(index1);
});

test('insert, the last index', () => {
  const table = new HashTable();
  const index = table.insert({ key: 19, data: 11 });
  const index1 = table.insert({ key: 39, data: 22 });
  expect(index1).toEqual(0);
});

test('insert, if hash table is full', () => {
  const table = new HashTable();
  for (let i = 0; i < 20; i++) {
    table.insert({ key: i, data: i });
  }
  expect(table.insert).toThrow();
});

test('search: can find', () => {
  const table = new HashTable();
  table.insert({ key: 3, data: 3 });
  expect(table.search(3)).toEqual({ key: 3, data: 3 });
});

test('search: can not find', () => {
  const table = new HashTable();
  table.insert({ key: 3, data: 3 });
  expect(table.search(2)).toEqual(null);
});

test('delete: there is the item', () => {
  const table = new HashTable();
  table.insert({ key: 3, data: 3 });
  expect(table.delete(3)).toEqual({ key: 3, data: 3 });
});

test('delete: did not have the item', () => {
  const table = new HashTable();
  table.insert({ key: 3, data: 3 });
  expect(table.delete(2)).toEqual(null);
});

test('toString', () => {
  const table = new HashTable();
  const index = table.insert({ key: 18, data: 11 });
  const index1 = table.insert({ key: 19, data: 22 });
  expect(table.toString()).toStrictEqual('(18,11);(19,22)');
});
