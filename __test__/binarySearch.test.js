import fn from '../src/binarySearch';

test(`${fn.name} --- 42,[1,2,3,42,97,98,99] --- 3`, () => {
  expect(fn(42, [1, 2, 3, 42, 97, 98, 99])).toBe(3);
});

test(`${fn.name} --- 42,[1,2,3,97,98,99] --- -1`, () => {
  expect(fn(42, [1, 2, 3, 97, 98, 99])).toBe(-1);
});
