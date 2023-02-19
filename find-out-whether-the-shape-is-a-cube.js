//kata - https://www.codewars.com/kata/58d248c7012397a81800005c

const cubeChecker = function (volume, side) {
  if (
    volume > 0 &&
    side > 0 &&
    Number.isInteger(volume) &&
    Number.isInteger(side)
  ) {
    if (Math.pow(side, 3) === volume) {
      return true;
    }
  }
  return false;
};

console.log(cubeChecker(56.3, 1)); //false
console.log(cubeChecker(-1, 2)); //false
console.log(cubeChecker(8, 3)); //false
console.log(cubeChecker(8, 2)); //true
