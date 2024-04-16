//Title: Training JS #18: Methods of String object--concat() split() and its good friend join()
//Link: https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  string = string.split(" ");
  let result = [];
  for (let i = 0; i < string.length; i++) {
    //console.log(string[i])
    result.push(string[i].split("").join(separator));
  }
  return result.join(" ");
}

splitAndMerge("My name is John", " "); //, "M y n a m e i s J o h n");
splitAndMerge("My name is John", "-"); // , "M-y n-a-m-e i-s J-o-h-n");
splitAndMerge("Hello World!", "."); // , "H.e.l.l.o W.o.r.l.d.!");
splitAndMerge("Hello World!", ","); // , "H,e,l,l,o W,o,r,l,d,!");

//split has an index .split('', 2) >> only 2 characters/words

//enhanced version
const splitAndMerge = (string, sep) => string.split(' ').map(str => str.split('').join(sep)).join(' ');
