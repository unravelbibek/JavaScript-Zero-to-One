// Operators in javascript
// assignment operators
// let laptopName = "Macbook Pro";

// // arithmetic operators
let num1 = 10;
let num2 = 200;

// console.log( 10 / 200 );

// console.log( 10 * 200 );

// let sum  = num1 + num2;


// let operate = 1 + ( 12 - 1 );

// let myValue = 'test value';

// console.log(operate);

// console.log(sum);



// console.log(4 ** 3); // 4 * 4 * 4 => 4 x 4 x 4


// 

// conditionals
/* 
    if (condition) {

    }
*/

// if (false) {
//     // console.log('It ran successfully');
//     console.log('this is another message on the console');
// } else {
//     console.log("else part ran");
//     console.log(123);
//     console.log("123");
// }

let usersCount       = 100;
let isEveryoneOnline = true;

// if (usersCount === 99) {
//     console.log( 'The users count = ' + usersCount );
// }


// if (usersCount === 99 && isEveryoneOnline) {
//     console.log("Coongrats for being here, good job!");
// } else if (usersCount === 100 && isEveryoneOnline) {
//     console.log("I see, everyone is active");
//     console.log("Good job");
// } else {
//     console.log("Oops!");
// }


// prompt()
let phone = prompt("Which phone do you prefer ?");

if (phone === 'samsung') {
    console.log('I like samsung smartphone');
} else if (phone === 'iphone') {
    console.log('I like iphone');
} else if (phone === 'lenovo') {
    console.log('I like lenovo phones');
} else if (phone === 'tablet') {
    console.log('I like tablet');
} else {
    console.log("Sorry, no match found");
}