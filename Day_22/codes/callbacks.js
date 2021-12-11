function add(a, b, callback, callback2) {
  setTimeout(() => callback(a + b, callback2), 0);
}

function result(sum, callback2) {
  console.log("sum : " + sum);

  setTimeout
}

console.log("hello 1");
add(1, 2, result, result2);
console.log("hello 2");

//
