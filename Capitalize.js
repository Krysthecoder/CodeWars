//Title:Alternate capitalization
//Link:https://www.codewars.com/kata/59cfc000aeb2844d16000075/solutions/javascript

//Comment:I believe im getting stuck on easy challengues, its time for me to study more, and improve my code, 
//I know there should be a way to not repeat the for loop, but I couldnt figure it out at the moment,

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



//I found it out, I tend to think linear (mean line by line) and sometimes I forget that I could use the same line for 2 purpose

function capitalize2(s) {
    s = s.split("");
    let arrayOne = "";
    let arrayTwo = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            arrayOne += s[i].toUpperCase();
            arrayTwo += s[i];
        } else if (i % 2 != 0) {
            arrayOne += s[i];
            arrayTwo += s[i].toUpperCase();
        }
    }
    return [arrayOne, arrayTwo];
}
