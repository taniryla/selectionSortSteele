function selectionSort(arr) {
  let newMin;
  let firstVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (firstVal > arr[i]) {
      newMin = arr[i];
      let temp = newMin;
      newMin = firstVal;
      firstVal = temp;
    }
    console.log(newMin, arr[i]);

    for (let j = i + 1; j < arr.length; j++) {
      if (newMin > arr[j + 1]) {
        newMin = arr[j + 1];
        temp = newMin;
        newMin = arr[j + 1];
        arr[j + 1] = newMin;
      }
      console.log(newMin, arr[j]);
    }
  }
  return arr;
}

selectionSort([4, 6, 2, 7, 3, 9]);
