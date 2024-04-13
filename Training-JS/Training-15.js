//Title: Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
//Link: https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

//I dont longer need to do for loops to iterate the array elements Wohhhhhhh

function howManySmaller(arr, n) {
  let counter = 0;
  arr.map((num) => (num.toFixed(2) < n ? counter++ : null));
  return counter;
}
