/**
 * @param {number} key
 * @param {number[]} arr
 * @returns {number}
 */
function binarySearch(key, arr) {
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (key < arr[mid]) hi = mid - 1;
    else if (key > arr[mid]) lo = mid + 1;
    else return mid;
  }
  return -1;
}

export default binarySearch;
