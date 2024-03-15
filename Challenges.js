// This is compilation of the challenges I have done so far on CodeWars





//Grasshopper - Messi goals function
//link: https://www.codewars.com/kata/55f73be6e12baaa5900000d4

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Number of People in the Bus
//link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
    let sum=0;
    for(let i=0;i<busStops.length;i++){
        sum=sum+busStops[i][0]-busStops[i][1];
        }
        return sum;
}

//Sentence Smash
//link: https://www.codewars.com/kata/53dc23c68a0c93699800041d/javascript

function smash (words) {
    return words.join(" ");
};
const smash = words => words.join(" "); //did this one just by watching how you do arrow function, but doesnt mean i understand them lol

//Name: Mumbling
//link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
    const array = s.toUpperCase().split("");
    let stringValue;
    let NewArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
        NewArray.push(array[i]);
        } else if (i >= 1) {
        stringValue = array[i] + array[i].toLowerCase().repeat(i);
        NewArray.push(stringValue);
        }
    }
    return NewArray.join("-");
}

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

//Name:Shortest Word
//Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
// you gave me the solution in golang so i dont believe this is fully valid :V 

function findShort(s) {
    const splitArray = s.split(' ');
    let minString = splitArray[0].length;
    for (let i = 0; i < splitArray.length; i ++){
        if(splitArray[i].length <= minString){
        minString = splitArray[i].length
        }
    }
    return minString
}

//name: Function 1 - hello world
//link: https://www.codewars.com/kata/523b4ff7adca849afe000035
//inside note: a challenge is a challenge :)
function greet() {
    return 'hello world!';
}

const greet = () => "hello world!" 

//Name: Reversed Strings
//Link: https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    return str.split('').reverse().join('');  
}
const solution = str => str.split('').reverse().join('');


//Name: Count of positives / sum of negatives
//Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    let positiveNumbers = [];
    let negativeNumber = 0;
    let solution = [];
    const specialRuls = [0, 0]
    if (input == null || input == []) {
        return [];
    } else {
        for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveNumbers.push(input[i]);
        } else if (input[i] <= 0) {
            negativeNumber += input[i];
        }
    }
    solution.push(positiveNumbers.length, negativeNumber);
    }
    for(i = 0; i < solution.length; i++){
        if(solution[i] === 0){
            return []
        }else{
            return solution
        }
    }
}

//Name:Convert a String to a Number
//Link: https://www.codewars.com/kata/544675c6f971f7399a000e79

const stringToNumber = function(str){
    return +str
}


//Name: Convert number to reversed array of digits
//Link: Convert number to reversed array of digits

function digitize(n) {
    n = String(n).split('').reverse()
    n = n.map(i=>Number(i))
    return (n)
}
function digitize(n) {
    n = String(n).split('').reverse().map(i=>Number(i))
    return n
}

function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

const digitize = n => String(n).split('').reverse().map(i=>Number(i))

