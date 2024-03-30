//Title: Sort deck of cards
//Link: https://www.codewars.com/kata/56f399b59821793533000683

//kindly know that kata is not yet solved for error I reported on slack, I am not sure if my code is the issue, but it looks like its not, so I will continue with the next challenges

function sortCards(array){
    let cardIndexLetters = {   //index for letters and its value in cards
        A : 1,
        T : 10,
        J : 11,
        Q : 12,
        K : 13,
        1 : "A",
        10 : "T",
        11 : "J",
        12 : "Q",
        13 : "k",
    }
    let subArr = []; //will have the converted array from letters into value
    let arraySolved = [];
    for(let i = 0; i < array.length; i ++){ //will iterate all array values and push it into subArr as values
        if(array[i] === "A"){
            subArr.push(cardIndexLetters[array[i]]);
        }else if(array[i] === "T"){
            subArr.push(cardIndexLetters[array[i]]);
        }else if(array[i] === "J"){
            subArr.push(cardIndexLetters[array[i]]);
        }else if(array[i] === "Q"){
            subArr.push(cardIndexLetters[array[i]]);
        }else if(array[i] === "K"){
            subArr.push(cardIndexLetters[array[i]]);
        }else{
            subArr.push(array[i]);
        }
    }
    subArr = subArr.sort(function(a, b){if (a > b)return 1; if (a < b) return -1; return 0}) //sorting subArr 
    for(let e = 0; e < subArr.length; e ++ ){
        if(subArr[e] === 1){
            arraySolved.push(cardIndexLetters[subArr[e]]);
        }else if(subArr[e] < 10 && subArr[e] != 1){
            arraySolved.push(subArr[e]);
        }else if(subArr[e] === 10){
            arraySolved.push(cardIndexLetters[subArr[e]]);
        }if(subArr[e] === 11){
            arraySolved.push(cardIndexLetters[subArr[e]]);
        }else if(subArr[e] === 12){
            arraySolved.push(cardIndexLetters[subArr[e]]);
        }else if(subArr[e] === 13){
            arraySolved.push(cardIndexLetters[subArr[e]]);
        }
    }
    return arraySolved;
}


sortCards([3,9,"A",5,"T",8,2,4,"Q",7,"J",6,"K"]);
sortCards(["J","J",2,"T",9,6]);
sortCards(["A",2,3,4,5,6,6,7,8,9,"T","J","Q","A"]);
sortCards([5, 'Q', 2, 9, 'T', 7, 3, 6, 'K', 'J', 'A', 4, 8]);