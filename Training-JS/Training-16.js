//Title:Training JS #16: Methods of String object--slice(), substring() and substr()
//Link: https://www.codewars.com/kata/57274562c8dcebe77e001012/solutions/javascript?filter=me&sort=best_practice&invalids=false

function cutIt(arr) {
  let shorterStr = arr[0].length;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shorterStr) {
      shorterStr = arr[i].length;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").slice(0, shorterStr).join(""));
  }
  return newArr;
}


//did this one with .map() but I am not really sure as the lines used are almost the same
function cutIt(arr){
    let shorterStr = arr[0].length;
    let newArr = [];
    arr.map(str => {
      str.length < shorterStr ? shorterStr = str.length : null;
    });
    arr.map(str =>{
      newArr.push(str.split('').slice(0, shorterStr).join(''))
    })
    return newArr;
  }