//Title: Count by X
//Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e/solutions/javascript

//First code using while

function countBy(x, n) {
  let z = [];
  let stop = x * n;
  let index = x;
  while (x <= stop) {
    z.push(x);
    x = index + x;
  }
  return z;
}

//second one using for loop

const countBy = (x, n) => {
  let z = [];
  let integer = x;
  for (let i = integer; i <= x * n; i = i + integer) {
    z.push(i);
  }
  return z;
};

