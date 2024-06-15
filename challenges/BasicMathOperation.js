//title: Basic Mathematical Operations
//link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript

function basicOp(operation, value1, value2){
    let value = []
    if(operation === "+"){
        value = value1 + value2
    }else if(operation === "-"){
        value = value1 - value2
    }else if(operation === "*"){
        value = value1 * value2
    }else if(operation === "/"){
        value = value1 / value2
    }
    return value
}



//PD: I thouthg the wanted to return the value and a string into an array so my first solution was actually this one:

function basicOp(operation, value1, value2){
    let value = []
    if(operation === "+"){
        value.push(value1 + value2)
        value.push(value1 + " " + operation + " " + value2 + " = " + value[0])
    }else if(operation === "-"){
        value.push(value1 - value2)
        value.push(value1 + " " + operation + " " + value2 + " = " + value[0])
    }else if(operation === "*"){
        value.push(value1 * value2)
        value.push(value1 + " " + operation + " " + value2 + " = " + value[0])
    }else if(operation === "/"){
        value.push(value1 / value2)
        value.push(value1 + " " + operation + " " + value2 + " = " + value[0])
    }
    return value
}
basicOp("+", 4, 7)
basicOp("-", 15, 18)
basicOp("*", 5, 5)
basicOp("/", 49, 7)
