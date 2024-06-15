//Title: Currying functions: multiply all elements in an array
//Link: https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

//I did not know I have to use currying functions so I tried to make it like this:

function multiplyAll(...args) {
  const [arr, multiplier] = args;
  return arr.map((digits) => digits * multiplier);
}

//but using currying functions looks nice ngl,

const multiplyAll = (arr) => (integer) => {
  let newArr = arr.map((element) => element * integer);
  return newArr;
};
//final submition
const multiplyAll = (arr) => (integer) =>  arr.map((element) => element * integer);


//example of currying functions

const multiply = (x,y) => x * y;

const curriedMultiply = x => y => x * y;

const test = a => b => a * b;

test (2) (5) 
