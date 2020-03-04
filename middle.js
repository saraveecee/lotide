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

const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);
  let newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 !== 0) {
    newArray.push(array[midIndex])
    return newArray;
  }

  if (array.length % 2 === 0) {
    newArray.push(array[midIndex - 1]);
    newArray.push(array[midIndex]);
    return newArray;
  }
}

middle(["one", "two", "three"]);
middle(["one"])
middle([])


const arrayNums = [1, 2, 3, 4];
const unevenArrayNums = [1, 2, 3, 4, 5];

assertArrayEqual(middle(unevenArrayNums), [3]);
assertArrayEqual(middle(arrayNums), [2, 3]);
