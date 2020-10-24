const random = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle…
  while (currentIndex) {
    // Pick a remaining element…
    randomIndex = Math.floor(Math.random() * currentIndex--);

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default random;
