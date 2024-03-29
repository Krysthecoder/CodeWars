function solve(arr) {
    let alphabetIndex = "abcdefghijklmnopqrstuvwxyz".split("");
    let subArr = [];
    let e = 0; //to globalize the second for loop valirable
    let counter = 0;
    let counterArr = [];
    for (let i = 0; i < arr.length; i++) {//I iterate each item into the main array
        subArr = arr[i].split(""); //each item is not sent to the subArray but splitted, meaning that each strin pushed is not an array
        for (e = 0; e < subArr.length; e++) {//Iterate each sub-array element
            if (subArr[e].toLowerCase() === alphabetIndex[e]) {//check the index of each sub-array element with my alphabetIndex
            counter++;
            }
        }
        if (e == subArr.length) {//check if the e variable in the second for loop (which is made it global) matches with the subarray index and if it does, it push the counter number into the counter array, and then counter is reseted
            counterArr.push(counter);
            counter = 0;
        }
    }
    return counterArr;
}  

solve(["abode","ABc","xyzD"])
solve(["abide","ABc","xyz"])
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])
solve(["encode","abc","xyzD","ABmD"])