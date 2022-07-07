const oneLinerJoke = require("one-liner-joke");

exports.getRandomJokes = function (numOfJokes) {
  let arrResult = [];
  for (let i = 0; i < numOfJokes; i++) {
    const getRandomJoke = oneLinerJoke.getRandomJoke();
    arrResult.push(getRandomJoke);
    console.log(getRandomJoke);
  }
  return arrResult;
};
