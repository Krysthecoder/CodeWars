//  Title: Classy Classes
//  Link: https://www.codewars.com/kata/55a144eff5124e546400005a/javascript

class Person {
    constructor(firstName = "johns", age = 34) {
        this.firstName = firstName;
        this.age = age;
    }

    get info() {
        return `${this.firstName}s age is ${this.age}`
    }
}