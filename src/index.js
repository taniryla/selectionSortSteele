function selectionSort(arr) {
  let firstVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (firstVal > arr[i]) {
      let newMin = arr[i];
    }
    if (newMin > arr[i]) {
      newMin = arr[i];
    }
    if (arr.length) {
      let temp = newMin;
      newMin = firstVal;
      firstVal = temp;
    }
  }
  return arr;
}
