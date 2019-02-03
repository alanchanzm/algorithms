function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function less(a, b, fn = (x, y) => x - y) {
  return fn(a, b) < 0;
}

export { exch, less };
