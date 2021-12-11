function add(a, b, callback) {
  var sum = a + b;
  callback(sum);
}

function result(res) {
  console.log("Result is : " + res);
}

add(1, 2, result);
