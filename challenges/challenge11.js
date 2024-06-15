//Title: Bouncing Ball
//Link: https://www.codewars.com/kata/5a40c250c5e284a76400008c/solutions/javascript




//learned the hardway how to properly do a while loop 


function bouncingBall(initial, proportion) {
    let bounces = 1;
    initial = initial * proportion
    while(initial >= 1){
        if(initial > 1){
            bounces++
        }
      initial = initial * proportion
    }
    return bounces
};