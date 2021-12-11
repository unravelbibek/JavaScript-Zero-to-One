// design pattern
// module pattern
const myCalculator = (function() {

    // private properties
    let counter = 1;
    
    // private methods
    function sumUp (a, b) {
        return a + b;
    }

    function subtract (a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    return {
       // public methods
       sum: function(a, b) {
           return sumUp(a, b); // a = 1 and b= 2
       },
       mul: function(a, b) {
           return multiply(a, b);
       },
       counter: counter
    };

})();

// console.log(myCalculator.mul(2, 3));
// myCalculator.sumUp(1, 2)

console.log(myCalculator.counter);