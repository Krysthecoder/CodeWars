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