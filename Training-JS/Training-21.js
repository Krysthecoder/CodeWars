//Title: Training JS #21: Methods of String object--trim() and the string template
//link: https://www.codewars.com/kata/5729b103dd8bac11a900119e/solutions/javascript?filter=me&sort=best_practice&invalids=false

//First hardcode solution

function fiveLine(s) {
  s = s.trim();
  let line1 = s;
  let line2 = [s, s].join("");
  let line3 = [s, s, s].join("");
  let line4 = [s, s, s, s].join("");
  let line5 = [s, s, s, s, s].join("");
  return `${line1}\n${line2}\n${line3}\n${line4}\n${line5}`;
}

//using .repea() method

function fiveLine(s) {
  s = s.trim();
  return `${s.repeat(1)}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(
    4
  )}\n${s.repeat(5)}`;
}

//using for loop just to make it easier to read

function fiveLine(s) {
  let solution = [];
  for (let i = 1; i < 6; i++) {
    solution.push(s.trim().repeat(i));
  }
  let ln = "\n";
  return solution.join(ln);
}
