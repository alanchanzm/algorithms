import { exch, less } from './index';

function insertion(arr) {
  const N = arr.length;
  for (let i = 1; i < N; i += 1) {
    for (let j = i; j > 0 && less(arr[j], arr[j - 1]); j -= 1) {
      exch(arr, j, j - 1);
    }
  }
}

export { insertion };
