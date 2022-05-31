function selectionSort(arr) {
  let newMin;
  for (let i = 0; i < arr.length; i++) {
    let firstVal = arr[i][0];
    for (let j = i + 1; j < arr.length; j++) {
      if (firstVal > arr[j]) {
        newMin = arr[j];
        let temp = newMin;
        newMin = firstVal;
        firstVal = temp;
      }
      if (arr[j] < newMin) {
        newMin = arr[j];
        temp = newMin;
        newMin = arr[i];
        arr[i] = newMin;
      }
      console.log(newMin, arr[j]);
    }
  }
  return arr;
}

selectionSort([4, 6, 2, 7, 3, 9]);
