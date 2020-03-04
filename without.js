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


function without(source, itemsToRemove) {
  let newArr = [];

  for (var i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      newArr.push(source[i]);
    }
  }
  return newArr;
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(without(words, ["hello"]), ["world", "lighthouse"]);
assertArrayEqual(without(words, ["goodbye"]), ["world", "lighthouse"]);
assertArrayEqual(without(words, ["hello", "world"]), ["hello"]);
