/**Can be used to sort an array in ascending or descending order
 * Big-O:O(n^2)
 * Not a very effiecient sorting technique but can be used for a small array.
 */
function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        min = j;
      }
    }
  }
  return arr;
}
console.log(selectionSort([2, 3, , 6, 10, 9, 0]));
