//Title: Training JS #12: loop statement --for..in and for..of
//Link: https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  let result = [];

  for (var key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].toString().length === 5) {
      result.push(obj[key]);
    }
  }

  return result;
}

//learned to use null to satisfy the ternary syntax and make the code works
function giveMeFive(obj) {
  let result = [];

  for (var key in obj) {
    key.length === 5 ? result.push(key) : null;
    obj[key].toString().length === 5 ? result.push(obj[key]) : null;
  }

  return result;
}
