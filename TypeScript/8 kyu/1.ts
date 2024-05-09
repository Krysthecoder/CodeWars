//Title: Calculate average
//Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/typescript

export function findAverage(arr: number[]): number {
    if (arr.length == 0) { return 0 }
    let sum: number = arr.reduce((elem, elemt) => elem + elemt)
    return sum / arr.length;
}

findAverage([1, 1, 1])//, 1

//enhanced version
export function findAverage2(arr: number[]): number {
    return arr.length == 0 ? 0 : (arr.reduce((elem, elemt) => elem + elemt) / arr.length)
}

//this aint mine but its cool I can still reduce it even more

const findAverage3 = (arr: number[]): number => arr.length ? (arr.reduce((elem, elemt) => elem + elemt) / arr.length) : 0