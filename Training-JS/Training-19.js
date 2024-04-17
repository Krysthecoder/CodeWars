//Title: Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/solutions/javascript?filter=me&sort=best_practice&invalids=false

function alienLanguage(str) {
  str = str.toUpperCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].slice(0, -1) + str[i][str[i].length - 1].toLowerCase();
  }
  return str.join(" ");
}

alienLanguage("My name is John"); // , "My NAMe Is JOHn");
alienLanguage("this is an example"); // , "THIs Is An EXAMPLe");
alienLanguage("Hello World"); // , "HELLo WORLd");
alienLanguage("HELLO WORLD"); // , "HELLo WORLd");



//Rergular expresion readin