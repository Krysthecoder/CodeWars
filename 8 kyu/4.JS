//  Title:  Fix the Bugs (Syntax) - My First Kata

// link:    https://www.codewars.com/kata/56aed32a154d33a1f3000018/solutions/javascript

function myFirstKata(a, b) {
    if (typeof a != "number" || typeof (b) != "number") {
        return false;
    } else {
        return a % b + b % a;
    }
}