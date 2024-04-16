//Title: Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
//Link: https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  let index1 = str.lastIndexOf(c);
  let index2 = str.indexOf(c);
  if (index1 === -1 || index2 === -1) {
    return -1;
  } else {
    return index1 - index2;
  }
}

firstToLast("ababc", "a"); // , 2);
firstToLast("ababc", "c"); // , 0);
firstToLast("ababc", "d"); // , -1)

//honestly I still dont understand them, so I will study them more deeply