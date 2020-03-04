const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length !== arr2.length) {
      return false;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("These arrays are equal.");
    console.log(arr1);
  } else {
    console.log("These arrays are NOT equal.");
    console.log(arr1, arr2);
  }
}

const flatten = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

const multArray = [1, 2, [3, 4], 5];
assertArrayEqual(flatten(multArray), [1, 2, 3, 4, 5]);
assertArrayEqual(flatten(multArray), [1, 2, [3], 4, 5]);
