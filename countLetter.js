const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${arguments[0]} === ${arguments[1]}`);
  } else {
    console.log(`👎 Assertion Failed: ${arguments[0]} !== ${arguments[1]}`);
  }
};

const countLetter = function(string) {
  const results = {};
  const stringCharacters = string.split(" ").join("");

  for (const letter of stringCharacters) {
    // console.log(letter);
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}

console.log(countLetter("this is lighthouse"));
console.log(countLetter("i don't know what i'm doing"));

