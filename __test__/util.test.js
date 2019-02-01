import 'babel-polyfill';
import { Stack } from '../util/index';

test(`Stack`, () => {
  const stack = Stack.of();
  expect(stack.size).toBe(0);
  expect(stack.pop()).toBe(undefined);
  expect(stack.size).toBe(0);
  stack.push(2);
  stack.push(3);
  stack.push(5);
  expect(stack.pop()).toBe(5);
  stack.push(4);
  expect(stack.size).toBe(3);
  const stackItems = [];
  for (const item of stack) {
    stackItems.push(item);
  }
  expect(stackItems).toEqual([4, 3, 2]);
});
