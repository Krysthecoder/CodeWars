// Title: Total amount of points
// Link: https://www.codewars.com/kata/5bb904724c47249b10000131

// 1st method:

function points(games) {
  let totalPoints = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i].split('')[0] > games[i].split('')[2]) {
      totalPoints += 3;
    } else if (games[i].split('')[0] === games[i].split('')[2]) {
      totalPoints += 1;
    }
  }

  return totalPoints;
}

// 2nd method:

const pointsTwo = (games) => {
  let points = 0;
  games.map((match) => {
    const [x, y] = match.split(':');
    x > y ? (points += 3) : x === y ? (points += 1) : null;
  });
  return points;
};

// 3rd method:

const pointsThree = (games) =>
  games.reduce(
    (points, match) =>
      (points +=
        match.split('')[0] > match.split('')[2]
          ? 3
          : match.split('')[0] === match.split('')[2]
          ? 1
          : 0),
    0
  );
