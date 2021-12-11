// var myFullName = function(first, last) {
//     return first + ' ' +  last;
// };

// // myFullName.myFunc = function() {
// //     console.log("this ran");
// // }

// // let fullName = myFullName('test', 'test');

// // console.dir(myFullName);

// let fullName = myFullName('sujal', 'khatiwada');

// console.log(fullName);






// we'll discuss about reference and primitives

let countryName = 'Nepal';

let anotherCountry = countryName; // Nepal


// console.log(typeof countryName);


anotherCountry = 'Bhutan'; // Bhutan

// console.log(countryName);

// console.log(anotherCountry);



// Object

// const bookDetails = {
//     bookName : "The parijat",
//     author   : "Parijat",
//     showInfo : function() {
//         console.log(this.bookName + ' ' + this.author);
//     }
// };

// let bookCopy = bookDetails;

// bookCopy.anotherMethod = function() {
//     console.log('this is just demo text');
// };

// bookCopy.anotherMethod1 = function() {

// };

// console.log(bookCopy);

// console.log(bookDetails);



// Array

let vegetablesToBuy = [ 'Potato', 'Tomato', 'Cowliflower' ];

// console.log(typeof vegetablesToBuy);
// console.log(Array.isArray(vegetablesToBuy));

// console.log(vegetablesToBuy[0]);
// console.log(vegetablesToBuy[1]);
// console.log(vegetablesToBuy[2]);

// for (let i = 0) {

// }

// console.log(vegetablesToBuy.length);  // 3

for ( let i = 0; i < vegetablesToBuy.length; i++ ) {
    console.log( vegetablesToBuy[i] );
}