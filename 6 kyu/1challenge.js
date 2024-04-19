//Title: Persistent Bugger
//Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

//Shame on me, it took me like 2 hrs and its the freaking code as the challenge 11 the Bouncing Ball

function persistence(num) {
  let counter = 0;
  while (num > 9) {
    let nums = num.toString().split("");
    num = nums.reduce((a, b) => a * b, 1);
    counter++;
  }
  return counter;
}
