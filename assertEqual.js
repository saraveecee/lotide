const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else {
    console.log(`👎 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 99);
assertEqual(1, "This is a string.");
assertEqual("I need coffee!", "I need coffee!");