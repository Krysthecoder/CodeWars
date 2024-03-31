//Title: Break Camel Case
//Link: https://www.codewars.com/kata/5208f99aee097e6552000148/solutions/javascript

//first code trying to have a object with the alphabet

const capAlphabet = {
    A: " A", B: " B", C: " C", D: " D", E: " E", F: " F", G: " G", H: " H", I: " I", J: " J",K: " K",
    L: " L", M: " M", N: " N", O: " O", P: " P", Q: " Q", R: " R", S: " S", T: " T", U: " U", V: " V",
    W: " W", X: " X", Y: " Y", Z: " Y",
}

function solution(string) {
    let strArr = string.split('');
    let solution = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] != strArr[i].toUpperCase()){
            solution.push(strArr[i])
        }else if(strArr[i] === strArr[i].toUpperCase()){
            solution.push(capAlphabet[strArr[i]])
        }
    }
    return solution.join('')
}


//after realizing that it was not actually needed

function solution(string) {
    let strArr = string.split('');
    let solution = [];
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] != strArr[i].toUpperCase()){
            solution.push(strArr[i])
        }else if(strArr[i] === strArr[i].toUpperCase()){
            solution.push(" " + strArr[i])
        }
    }
    return solution.join('')
}