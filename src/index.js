function selectionSort(arr) {
  let newMin;
  let firstVal = arr[0];
  console.log(firstVal);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstVal) {
      let temp = arr[i];
      arr[i] = firstVal;
      firstVal = temp;
    }
    console.log(firstVal, arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      console.log(newMin, arr[j]);
    }
  }
  return arr;
}

selectionSort([4, 6, 2, 7, 3, 9]);
