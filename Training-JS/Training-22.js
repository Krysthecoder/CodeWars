//Title: Unlock new skills--Arrow function,spread operator and deconstruction
//Link:https://www.codewars.com/kata/572ab0cfa3af384df7000ff8/javascript

//learned the usage of for and for each
const shuffleIt = (arr, ...indices) => {
  indices.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
};

const shuffleIt1 = (arr, ...index) => {
  for ([a, b] of index) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
};

shuffleIt([1,2,3,4,5],[1,2])// , [1,3,2,4,5]);
shuffleIt([1,2,3,4,5],[1,2],[3,4])// 13254, [1,3,2,5,4]);
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3])// , [1,3,5,2,4]);
