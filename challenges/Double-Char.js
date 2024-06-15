//Title: Double Char
//Link: https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript?filter=me&sort=best_practice&invalids=false



function doubleChar(str) {
    str = str.split('')
    let arr = []
    for(let i = 0; i < str.length; i ++){
        arr.push((str[i] + str[i]))
    }
    return arr.join('')
}