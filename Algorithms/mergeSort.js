/**Implements merge sort alogrithm
 * Big-O:O(n log n)
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sorted = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(leftArr.shift());
    } else sorted.push(rightArr.shift());
  }
  return [...sorted, ...leftArr, ...rightArr];
}
console.log(mergeSort([2, 3, 6, 10, 9, 0]));
