//Title:
//Link:https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions/javascript

//Comment:

function capitalize(s){
    s = s.split('');
    let arrayOne = [];
    let arrayTwo = [];
    for(let i = 0; i < s.length; i ++){
        if(i % 2 == 0){
            arrayOne.push(s[i].toUpperCase());
        }else if(i % 2 != 0){
            arrayOne.push(s[i])
        }
    }
    for(let i = 0; i < s.length; i ++){
        if(i % 2 != 0){
            arrayTwo.push(s[i].toUpperCase());
        }else if(i % 2 == 0){
            arrayTwo.push(s[i])
        }
    }
    let result = [arrayOne.join(''), arrayTwo.join('')]
    console.log(result)
};