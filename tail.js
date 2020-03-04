const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else {
    console.log(`👎 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const tail = function(array) {
  return array.slice(1);
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
console.log(tail(words));


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



