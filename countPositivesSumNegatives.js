//Name: Count of positives / sum of negatives
//Link: https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
    let positiveNumbers = [];
    let negativeNumber = 0;
    let solution = [];
    const specialRuls = [0, 0]
    if (input == null || input == []) {
        return [];
    } else {
        for (i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveNumbers.push(input[i]);
        } else if (input[i] <= 0) {
            negativeNumber += input[i];
        }
    }
    solution.push(positiveNumbers.length, negativeNumber);
    }
    for(i = 0; i < solution.length; i++){
        if(solution[i] === 0){
            return []
        }else{
            return solution
        }
    }
}
