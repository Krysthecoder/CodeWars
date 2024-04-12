//Title: Training JS #11: loop statement --break,continue
//Link: https://www.codewars.com/kata/5721c189cdd71194c1000b9b/javascript

//the challenge wanted me to use for, break and continue in that order so I have to do it on this way

function grabDoll(dolls) {
  var bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (bag.length == 3) {
      break;
    } else if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      continue;
    }
  }
  return bag;
}

////my way of using .map and ternary operators

function grabDoll(dolls) {
  var bag = [];
  var subBag = [];
  dolls.map((doll) =>
    doll === "Hello Kitty"
      ? bag.push(doll)
      : doll === "Barbie doll"
      ? bag.push(doll)
      : subBag.push(doll)
  );
  return bag;
}

const grabDoll = (dolls) => {
  var bag = [],
    subBag = [];
  dolls.map((doll) =>
    doll === "Hello Kitty"
      ? bag.push(doll)
      : doll === "Barbie doll"
      ? bag.push(doll)
      : subBag.push(doll)
  );
  return bag;
};
