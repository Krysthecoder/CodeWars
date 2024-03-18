//Name: Convert number to reversed array of digits
//Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//solution-1
function digitize(n) {
    n = String(n).split('').reverse()
    n = n.map(i=>Number(i))
    return (n)
}

//solution-2
function digitize(n) {
    n = String(n).split('').reverse().map(i=>Number(i))
    return n
}

//solution-3
function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

//solution-4
const digitize = n => String(n).split('').reverse().map(i=>Number(i))

