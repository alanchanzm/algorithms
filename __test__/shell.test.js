import { shell } from '../src/ch02/shell';

test(`ok`, () => {
  const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  shell(arr);
  expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
