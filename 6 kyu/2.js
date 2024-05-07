//Title: Find The Parity Outlier
//Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript

//first solution:

function findOutlier(integers) {
  let pair = [];
  let unpair = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      pair.push(integers[i]);
    }
    if (integers[i] % 2 != 0) {
      unpair.push(integers[i]);
    }
  }
  if (pair.length < unpair.length) {
    return pair[0];
  } else {
    return unpair[0];
  }
}

//second version:

const findOutlier = (integers) => {
  let [pair, unpair] = [[], []];
  integers.map((elem) => {
    if (elem % 2 === 0) {
      pair.push(elem);
    }
    if (elem % 2 != 0) {
      unpair.push(elem);
    }
  });
  return pair.length < unpair.length ? pair[0] : unpair[0];
};
