function selectionSort(arr) {
  let newMin;
  for (let i = 0; i < arr.length; i++) {
    let firstVal = arr[i][0];
    if (firstVal > arr[i + 1]) {
      newMin = arr[i + 1];
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
