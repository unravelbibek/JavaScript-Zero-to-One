// // expression

// let myName = 'sujal khatiwada';

// console.log(myName);

// var a = {
//     firstName : "sujal"
// };

// let myCalc = ( 1 + 2 - 1 );

// function statement / function declaration
function myFunction() {
    console.log('This is from my function');
}

// myFunction();

// function expression
var myFullName = function(first, last) {
    return first + ' ' + last;
};

myFullName.myFunc = function() {
    console.log("this ran");
}

let fullName = myFullName('test', 'test');

console.dir(myFullName);

// console.log(fullName);

// var myFavBook = {
//     bookName    : 'The harry potter',
//     bookAuthor  : 'J.K rowling'
// };

// myFavBook.showAuthor = function() {
//     console.log(this.bookAuthor);
// };

// myFavBook.showAuthor();

// console.log(myFavBook);


