//Title: Abbreviate a Two Word Name
//Link: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/typescript

//first hard solution:

export function abbrevName(name: string): string {
    //seteamos la variable que retornaremos
    let abbrev: string[] = [];
    //iteramos los caracteres dento de name
    abbrev.push(name[0])
    for (let i: number = 0; i < name.length; i++) {
        if (name[i] == ' ') {//verificamos que el elemento sea un espacio en blanco
            abbrev.push("."); //al ser un spacio en blanco mandamos un punto en ves de el espacio
            abbrev.push(name[i + 1])//mandamos la siguiente letra despues del espacio
        }

    }
    let final: string = abbrev.join('')
    return final.toUpperCase();
}

abbrevName("Sam Harris");
abbrevName("Patrick Feenan");
abbrevName("R favuzzi");
