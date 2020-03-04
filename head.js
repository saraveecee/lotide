const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else {
    console.log(`👎 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const head = function(array) {
  return array[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]));
assertEqual(head([1]), 1);
