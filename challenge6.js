//Closest to Zero
//Link: https://www.codewars.com/kata/59887207635904314100007b

function closest(arr){
    let positiveVal = Infinity;
    let negativeVal = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            return arr[i];
        }else if(arr[i] < positiveVal && arr[i] > 0){
            positiveVal = arr[i];
        }else if(arr[i] > negativeVal && arr[i] < 0){
            negativeVal = arr[i];
        }
    }
    if(positiveVal === -negativeVal){
        return null;
    }else{
        return Math.abs(negativeVal) < positiveVal ? negativeVal : positiveVal;
    }
}