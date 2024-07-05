const sumAll = function (a, b) {
  if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  const startRange = a < b ? a : b;
  const endRange = a > b ? a : b;

  console.log(startRange);
  let sum = 0;

  for (let i = startRange; i <= endRange; i++) {
    sum += i;
  }

  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
