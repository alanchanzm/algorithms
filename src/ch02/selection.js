import { exch, less } from './index';

function selection(arr) {
  const N = arr.length;
  for (let i = 0; i < N; i += 1) {
    let min = i;
    for (let j = i + 1; j < N; j += 1) {
      if (less(arr[j], arr[min])) min = j;
    }
    exch(arr, i, min);
  }
}

export { selection };
