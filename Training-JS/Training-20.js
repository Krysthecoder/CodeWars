//Title: Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()
//Link: https://www.codewars.com/kata/57284d23e81185ae6200162a/solutions?filter=all&sort=best_practice&invalids=false

//Odio unicode >:V
function topSecret(str) {
  let arr = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let subArr = str[i].split("");
    for (let e = 0; e < subArr.length; e++) {
      if (/[a-zA-Z]/.test(subArr[e])) {
        subArr[e] = String.fromCharCode(subArr[e].charCodeAt() - 3);
        if (
          (subArr[e].charCodeAt() < 65 && subArr[e].charCodeAt() > 57) ||
          (subArr[e].charCodeAt() < 97 && subArr[e].charCodeAt() > 91)
        ) {
          subArr[e] = String.fromCharCode(subArr[e].charCodeAt() + 26);
        }
      }
    }
    arr.push(subArr.join(""));
  }
  return arr.join(" ");
}

topSecret("Pb qdph lv Mrkq"); // , "My name is John");
topSecret("wklv lv dq hadpsoh"); // , "this is an example");
topSecret("Khoor, Zruog!"); // , "Hello World!")
