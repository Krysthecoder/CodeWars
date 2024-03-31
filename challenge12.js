//Title:Is it a letter?
//Link: 


//first using regex, but I am not really sure about using it as i dont really understand that much of it

let regex = /^[a-zA-Z]+$/;
function isItLetter(character) {
    if(regex.test(character)){
        return true
    } else {
        return false
    }
}

//second i just wanted to simplify the code

const isItLetter = character => { if(/^[a-zA-Z]+$/.test(character)) return true; else return false }


//Alexs gave me a hint on using Typeof === "string" however I couldnt figure it out on how to make it work on this scenarios as all inputs are strings so I decided to go with the below aproach

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function isItLetter(character){
    character = character.toString().toLowerCase()
    let solution = false
    for(let i = 0; i < alphabet.length; i++){
        if (alphabet[i] === character){
            solution = true
        }
    }
    return solution
}


isItLetter('a') //true
isItLetter('1') //false
isItLetter('y') //true
isItLetter('z') //true