function exch(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export { exch };
