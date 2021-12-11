function doSomething() {
  return new Promise((resolve, reject) => {
    let error = true;

    if (!error) {
      resolve("You have fetched data");
    } else {
      reject("Error occured");
    }
  });
}

console.log("hello 1");

//200ms
doSomething()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

console.log("hello 2");
