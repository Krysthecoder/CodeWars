//Title: Training JS #10: loop statement --for
//Link: https://www.codewars.com/kata/5721a78c283129e416000999/javascript

function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++){
    arr[i] % 2 === 0 ? even.push(arr[i]) :odd.push(arr[i]);
  }
  return [odd,even]
}



//I tried to use map to stop using for loop
//but I got the error of undefined since I was trying to use the index
// and not the element itsel (i was thinking that map, was a for loop and used index)
function pickIt(arr){
  let  odd=[],test=[];
  arr.map((i) => (arr[i] % 2 === 0 ? test.push(arr[i]) : odd.push(arr[i])))
  console.log( [odd,test])
}

//finally I got the .map() idea how it works, 


const pickIt = (arr) => {
  let  odd=[],test=[];
  arr.map(arrEl => arrEl % 2 === 0 ? test.push(arrEl) : odd.push(arrEl))
  return [odd,test]
} 

//it was not accepted because it asked to be used a for loop