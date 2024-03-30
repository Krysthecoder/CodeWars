//Title: Is n divisible by (...)?
//link:https://www.codewars.com/kata/558ee8415872565824000007/solutions/javascript?filter=me&sort=best_practice&invalids=false


//Before error code
// This gave an error, cuz at some random test, they provide an empty function, and since I have my TrueResult variable empty, it returns an "undefined" status

function isDivisible(){
    let result;
    for(let i = 1; i < arguments.length; i ++ ){
        if((arguments[0] % arguments[i]) === 0){
            result = true
        }else{
            return false
        }
    }
    return result;
}

//After fixing the result variable

function isDivisible(){
    let result = true;
    for(let i = 1; i < arguments.length; i ++ ){
        if((arguments[0] % arguments[i]) === 0){
            result = true
        }else{
            return false
        }
    }
    return result;
}