// loops in javascript

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(5);
// console.log(5);
// console.log(5);
// console.log(5);

// for loop
// let i = 1;

// for ( ; i <= 10; i++) {
//     console.log(i);
// }


// let a = 2;

// for ( ; ; ) {

//     if (a == 4) {
//         break;
//     }

//     console.log(a);

//     a++; // 4

// }

// console.log(123);



// while loop
/*
let init = 1;

while ( init <= 10 ) {

    console.log(init);

    init++;
}

console.log(init);
*/



// switch case
// let festival = 'dashain';
// switch ( festival ) {
//     case 'tihar':
//         console.log('Tihar got printed');
//         break;
//     case 'dashain':
//         console.log('Dashain got printed');
//         console.log('This also got ran');
//         break;
//     case 'chhath':
//         console.log('chhath got printed');
//         break;
//     case 'eid':
//         console.log('eid got printed');
//         break;
//     case 'holi':
//         console.log("holi got printed");
//         break;
//     default:
//         console.log('Oops, sorry, not found');
// }




// switch case
// let myFavNumber = 10;

// switch ( myFavNumber ) {
//     case 1:
//         console.log("1 is being printed");
//         break;
//     case 20:
//         console.log("20 is being printed");
//         break;
//     case '10':
//         console.log("10 is the value");
//         break;
//     default:
//         console.log('No match found');
// }


// nested if

// if (true) {

//     let continueTimer = true;

//     if (continueTimer) {
//         console.log('The timer has been started');
//     } else {
//         console.log("printed");
//     }

//     console.log(continueTimer);
    
// }



// if
/*
    A company named XYZ gives bonus
    manager   => 7000
    developer => 5000
    designer  => 3000
*/

let position = 'manager', bonus = 0;

// if (position === 'designer') {
//     bonus = 3000;
// } else if (position === 'manager') {
//     bonus = 7000;
// } else if (position === 'developer') {
//     bonus = 5000;
// }

// console.log('You got Rs. ' + bonus + '  as a bonus');



// Assignment
// 
let email = {
    sendTo   : 'test@email.com',
    sendFrom : 'me@email.com',
    send     : function() {
        console.log('message sent');
    }
};

// email["send"]();
email.send();