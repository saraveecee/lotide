const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else {
    console.log(`👎 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
