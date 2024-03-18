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