//Tile: ASCII letters from Number
//link: https://www.codewars.com/kata/589ebcb9926baae92e000001/solutions/javascript?filter=me&sort=best_practice&invalids=false


function convert(number){
    const ascii = { 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 32: " "};
    let mainArr = number.split('');
    let subArr= [];
    let result = [];
    let i = 0;
    for(let i = 0; i < mainArr.length; i += 2){
        subArr.push(mainArr.slice(i, i + 2).join(''))
    }
    for(let e = 0; e < subArr.length; e ++){
        result.push(ascii[subArr[e]])
    }
    return result.join('')
}

//learned how that depending on how I increase the operator in the for loop, somehow it breaks it and do infinity loop