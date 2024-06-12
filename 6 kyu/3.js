//  Title: Who likes it?
//  Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
    if (names.length == 0) {
        return "no one likes this"
    } else if (names.length >= 4) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    return names[0] + " likes this"
}

// cuz its fun 

const likes = names => 
    names.length == 0 ? "no one likes this" : 
    names.length >= 4 ? `${names[0]}, ${names[1]} and ${names.length - 2} others like this` : 
    names.length == 2 ? `${names[0]} and ${names[1]} like this` : 
    names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` :  
    names[0] + " likes this"