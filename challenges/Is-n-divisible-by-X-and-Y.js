//title: Is n divisible by x and y?
//link: https://www.codewars.com/kata/5545f109004975ea66000086/solutions/javascript?filter=me&sort=best_practice&invalids=false

//Used this kata to confirm that my code for challenge 8 was good or not

function isDivisible(n, x, y) {
    if(n%x===0 && n%y===0) return true;
    else return false
}

//single line code?

const isDivisible = (n, x, y) => {if(n%x===0 && n%y===0) return true; else return false}