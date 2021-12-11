const numbers = [23, 123, 1];

// const yoginiDashas = ["Mangala", "Pingala", "Shankta"];
// console.log(numbers.sort());
// console.log(yoginiDashas.sort());
const sortedNumbers = numbers.sort(function (a, b) {
  //   if (a > b) return 1;
  //   else return -1;

  return b - a;
});

console.log(sortedNumbers);

// console.log("1bc".charCodeAt(0));

//function overloading
// function add(a, b) {
//   return a + b;
// }

// function add(a, b, c) {
//   return a + b + c;
// }
//function overriding.
