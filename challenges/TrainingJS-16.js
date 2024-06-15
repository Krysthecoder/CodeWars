//Training JS #16: Methods of String object--slice(), substring() and substr()
//link: https://www.codewars.com/kata/57274562c8dcebe77e001012/solutions/javascript

function cutIt(arr){
    let shorterStr = arr[0].length;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < shorterStr){
            shorterStr = arr[i].length;
        }
    }
    for(let i = 0; i < arr.length; i ++){
        newArr.push(arr[i].split('').slice(0,shorterStr).join(''))
    }
    return newArr
}

cutIt(["ab","cde","fgh"])
cutIt(["abc","defgh","ijklmn"])
cutIt(["codewars","javascript","java"])

