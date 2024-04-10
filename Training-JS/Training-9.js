//Title: Training JS #9: loop statement --while and do..while
//Link: https://www.codewars.com/kata/57216d4bcdd71175d6000560/javascript

//first version of code
function padIt(str, n) {
  let index = 1;
  let right = "";
  let center = str;
  let left = "";

  while (index <= n) {
    if (index % 2 === 0) {
      right += "*";
    } else {
      left += "*";
    }
    index = index + 1;
  }
  return left + str + right;
}

//using ternary operators

function padIt(str, n) {
  let index = 1;
  let right = "";
  let center = str;
  let left = "";
  while (index <= n) {
    index % 2 === 0 ? (right += "*") : (left += "*");
    index += 1;
  }
  return left + str + right;
}
