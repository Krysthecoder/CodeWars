//Title:Training JS #7: if..else and ternary operator
//Link: https://www.codewars.com/kata/57202aefe8d6c514300001fd/solutions/javascript

function saleHotdogs(n){
    return n < 5 ? n*100 : n >= 5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : 0;
}

const saleHotdogs = n => n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90