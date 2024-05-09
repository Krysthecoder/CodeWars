//Title: You only need one - Beginner
//Link: https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/typescript

export const check = (a: (number | string)[], x: number | string): boolean => {
    return a.includes(x); // your code here...
}


check([66, 101], 66)//, true);
check([80, 117, 115, 104, 45, 85, 112, 115], 45)//, true);
check(['t', 'e', 's', 't'], 'e')//, true);
check(['what', 'a', 'great', 'kata'], 'kat')//, false);

//one single line :V
export const check1 = (a: (number | string)[], x: number | string): boolean => a.includes(x);