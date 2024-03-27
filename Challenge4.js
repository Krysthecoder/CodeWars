//title: String reverse slicing 101
//link: https://www.codewars.com/kata/586efc2dcf7be0f217000619



//please know that this is my first attend, i did not know the slice() method, so i was able to solve the first test but not the second one:

function reverseSlice(str) {
    let arr = str.split('').reverse();
    let result =[]
    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            result.push(arr.join(''))
        }
        test = arr.shift()
        result.push(arr.join(''))
    }
    console.log(result)
}

// this is the one i was able to use with the slice method
function reverseSlice(str) {
    let arr = str.split('').reverse();
    let result =[]
    for(let i = 0; i < arr.length; i++){
        result.push(arr.slice(i).join(''))
    }
    return result
}

//also trying to use or get used to arrow functions

const reverseSlice = str => {
    let arr = str.split('').reverse();
    let result =[]
    for(let i = 0; i < arr.length; i++){
        result.push(arr.slice(i).join(''))
    }
    return result
}