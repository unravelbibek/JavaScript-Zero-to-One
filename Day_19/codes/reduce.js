// const numbers = [1, 2, 3, 4];
// //1 => index 0
// //2 => index 1
// //3 => index 2

// // [6]
// const max = numbers.reduce((previousValue, currentValue) =>
//   previousValue > currentValue ? previousValue : currentValue
// );

// console.log(max);

const employees = [
  {
    name: "Lucky",
    salary: 1000,
  },
  {
    name: "Pratik",
    salary: 1500,
  },
  {
    name: "Neri",
    salary: 2000,
  },
];

const totalSalaryAmount = employees.reduce((prev, cur) => {
  return {salary: prev.salary + cur.salary};
});

console.log(totalSalaryAmount);
