const employeeList = [
  {
    name: "ABC",
    age: 22,
    salary: 2000,
    post: "Developer",
  },
  {
    name: "DEF",
    age: 30,
    salary: 2400,
    post: "Developer",
  },
  {
    name: "Ram",
    age: 23,
    salary: 2500,
    post: "Manager",
  },
];

const sanitizedData = employeeList
  .map((employee) => {
    return {name: employee.name, age: employee.age, post: employee.post};
  })
  .filter((employee) => employee.age >= 22 && employee.post == "Developer")
  .sort((a, b) => b.age - a.age);

// .css().fadeIn().

console.log(sanitizedData);
