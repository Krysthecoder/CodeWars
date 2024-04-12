//Title: Training JS #14: Methods of Number object--toString() and toLocaleString()
//Link: https://www.codewars.com/kata/57238ceaef9008adc7000603/solutions/javascript

function colorOf(r, g, b) {
  //coding here
  r = r.toString(16).padStart(2, "0");
  g = g.toString(16).padStart(2, "0");
  b = b.toString(16).padStart(2, "0");

  return "#" + (r + g + b);
}
