// const fruits = ["Apple", "Mango", "Strawberry"];
const user = {
  id: 1,
  name: "ABC",
};

// for (let key in user) {
//   console.log(user[key]);
// }

// console.log(Object.keys(user));
// console.log(Object.entries(user));

for (let [key, value] of Object.entries(user)) {
  console.log(value);
}

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let i of fruits) {
//   console.log(i);
// }

// for (let i in fruits) {
//   console.log(fruits[i]);
// }

//for-of : value;
//for-in  : index (Key)
