import { exch, less } from './index';

function shell(arr) {
  const N = arr.length;
  let h = 1;
  while (h < Math.floor(N / 3)) h = 3 * h + 1;
  while (h >= 1) {
    for (let i = h; i < N; i += 1) {
      for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h) {
        exch(arr, j, j - h);
      }
    }
    h = Math.floor(h / 3);
  }
}

export { shell };
