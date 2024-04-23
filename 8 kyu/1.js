//Title:  Grasshopper - Summation
//Link:  https://www.codewars.com/kata/55d24f55d7dd296eb9000030/solutions/javascript

var summation = function (num) {
  let total = 0;
  while (num > 0) {
    total += num;
    num--;
  }
  return total;
};
