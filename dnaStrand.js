//Title:  Complementary DNA
//link: https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function dnaStrand(dna) {
    let array = dna.split("");
    let arrayTwo = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "A") {
        arrayTwo.push("T");
        } else if (array[i] === "T") {
        arrayTwo.push("A");
        } else if (array[i] === "G") {
        arrayTwo.push("C");
        } else if (array[i] === "C") {
        arrayTwo.push("G");
        }
    }
    return arrayTwo.join("");
}

  //dnaStrand("TTAA")
  //dnaStrand("ATTGC")
  //Masta Solution
function splitter(v){
  return v.split('').reverse().join('')
}
splitter("123")