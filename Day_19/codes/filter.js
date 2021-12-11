const numbers = [2, 1, 4];

// const filteredNumbers =
numbers.filter((value) => value >= 3);

// console.log(filteredNumbers, numbers);
console.log(numbers);

const user = [
  {
    name: "Dipshan",
    age: 18,
  },
  {
    name: "Ashmin",
    age: 17,
  },
  {
    name: "Pratik",
    age: 20,
  },
];

const personWhoCanVote = user.filter((value) => value.age >= 18);

console.log(personWhoCanVote);
