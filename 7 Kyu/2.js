//Title: Jaden Casing Strings
//Link: https://www.codewars.com/kata/5390bac347d09b7da40006f6/javascript

String.prototype.toJadenCase = function () {
  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  return this.split(' ').map(capitalize).join(' ');
};

const test = "How can mirrors be real if our eyes aren't real";

console.log(test.toJadenCase());
