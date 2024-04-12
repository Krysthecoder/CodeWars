//Title: Training JS #13: Number object and its properties
//Link: https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/solutions/javascript

function whatNumberIsIt(n) {
  const text = "Input number is ";
  //coding here
  if (n == Infinity) {
    return text + "Number.POSITIVE_INFINITY";
  } else if (n == 1.7976931348623157e308) {
    return text + "Number.MAX_VALUE";
  } else if (isNaN(n)) {
    return text + "Number.NaN";
  } else if (n == 5e-324) {
    return text + "Number.MIN_VALUE";
  } else if (n == -Infinity) {
    return text + "Number.NEGATIVE_INFINITY";
  } else if (n === n * 1) {
    return text + n;
  }
}
