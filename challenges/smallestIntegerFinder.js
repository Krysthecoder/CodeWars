//name: Find the smallest integer in the array
//link: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minVal = args[0]
        for(let i = 0; i < args.length; i++){
        if(args[i] <= minVal){
        minVal = args[i]
        }
    }
    return minVal
    }
}