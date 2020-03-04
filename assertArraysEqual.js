function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArrayEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are equal.");
  } else {
    console.log("These arrays are NOT equal.");
  }
}
