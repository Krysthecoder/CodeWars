//Number of People in the Bus
//link: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
    let sum=0;
    for(let i=0;i<busStops.length;i++){
        sum=sum+busStops[i][0]-busStops[i][1];
        }
        return sum;
}