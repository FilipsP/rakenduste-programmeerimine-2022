function multiply() {
  return 3 * 4;
}
console.log("*", multiply());

const divide = () => 20 / 4;
console.log("/", divide());

// map
const numbersArrray = [-3, -2, -1, 0, 1, 2, 3, 4];
const square = (number) => Math.pow(number, 2);
const squareArray = numbersArrray.map(square);
console.log({
  squareArray,
});

// filter
const checkNumber = (number) => number > 0;
const filteredNumArray = numbersArrray.filter(checkNumber);
console.log({
  filteredNumArray,
});

// reduce
const sumOfElements = numbersArrray.reduce(
  (previous, current) => previous + current, 0);
console.log({
  sumOfElements,
});

const firstArr = ["a", "b", "c"];
const secondArr = ["d", "e", "f"];
firstArr.push(...secondArr);
console.log({
  firstArr,
});

let firstObj = {
  a: 1,
  b: 2,
};
let secondObj = {
  ...firstObj,
  c: 3,
  d: 4,
  e: 5
};

console.log({ secondObj });