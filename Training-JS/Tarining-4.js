//Title: Training JS #4: Basic data types--Array
//Link: https://www.codewars.com/kata/571effabb625ed9b0600107a/solutions/javascript

function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    let i = arr.length - 1
    return arr[i]
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el)
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    let i = arr.pop()
    return arr
  }
