const numbers = [1, 2, 3];

const doSquare = (number) => number * number;
const doCube = (number) => number * number * number;
const doSquareRoot = (number) => Math.sqrt(number);

const calculate = (numbers, logic) => {
  var result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(logic(numbers[i]));
  }
  return result;
};

console.log(calculate(numbers, doSquare));
console.log(calculate(numbers, doCube));
console.log(calculate(numbers, doSquareRoot));
