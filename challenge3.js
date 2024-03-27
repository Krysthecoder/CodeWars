//Fruit string calculator
//https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/solutions/javascript?filter=me&sort=best_practice&invalids=false

//I feel im getting stuck using the same methods again, my code relies on string, array, for loop etc, I feel im lacking on other methods like objects usage, 


//1st submitted code
function calculate(string) {
    let array = string.split(' ');
    let values = [];
    let operator;
    for(let i = 0; i < array.length; i++ ){
        if(array[i]*1){
            values.push(array[i]*1)
        }else if(array[i] === "loses"){
            operator = "loses"
        }else if(array[i] === "gains"){
            operator = "gains"
        }
    }
    if(operator === "loses"){
        return values[0] - values[1]
    }else{
        return values[0] + values[1]
    }
}

calculate("Panda has 48 apples and loses 4")
calculate("Jerry has 34 apples and gains 6")