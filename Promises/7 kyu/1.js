//  Title: A Promise is a Promise
//  Link: https://www.codewars.com/kata/5b61d6ef07a266d40b000097/train/javascript

function promiseHelloWorld() {
    return Promise.resolve("Hello World!");
  }

  
//  Enhanced version


let promiseHelloWorld = () => Promise.resolve("Hello World!");