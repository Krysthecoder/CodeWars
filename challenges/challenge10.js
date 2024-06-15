//Title: Sort the climbing grades
//Link: https://www.codewars.com/kata/58a08e622e7fb654a300000e/solutions/javascript


let climbIndex = {
    "VB": 1, "V0": 2, "V0+": 3, "V1": 4,"V2": 5, "V3": 6, "V4": 7, "V5": 8, "V6": 9, "V7": 10, "V8": 11, 
    "V9": 12, "V10": 13, "V11": 14, "V12": 15, "V13": 16, "V14": 17, "V15": 18, "V16": 19, "V17": 20,
    1 : "VB", 2: "V0", 3: "V0+", 4: "V1", 5: "V2", 6: "V3" ,7: "V4",8: "V5", 9: "V6", 10: "V7", 11: "V8", 
    12: "V9", 13: "V10" , 14: "V11", 15: "V12", 16: "V13", 17: "V14", 18: "V15", 19: "V16", 20: "V17",
}

function sortGrades(lst){
    let subArr = []
    let solvedArr = []
    for(let i = 0; i < lst.length; i ++){
        subArr.push(climbIndex[lst[i]]);
    }
    subArr = subArr.sort(function(a, b){if (a > b)return 1; if (a < b) return -1; return 0}); console.log(subArr)
    for (let e = 0; e < subArr.length; e ++){
        solvedArr.push(climbIndex[subArr[e]]);
    }
    return solvedArr
}

sortGrades(["V7", "V12", "V1"])
sortGrades(["V13", "V14", "VB", "V0"])
sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"])
sortGrades([])