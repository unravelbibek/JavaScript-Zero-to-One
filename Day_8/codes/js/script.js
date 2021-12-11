// Object
// Object literal syntax
// const house = {
//     color              : 'green',
//     noOfFloors         : 2,
//     noOfMainDoors      : 1,
//     noOfRooms          : 10,
//     noOfKitchens       : 2,
//     price              : 1200000.0001212,
//     isListedOnSale     : true,
//     showDetailsOfHouse : function() {
//         return 'Color: ' 
//             + this.color 
//             + ' , No of floors: ' 
//             + this.noOfFloors;
//     }
// };

// console.log(house);
// console.log(house.color);

// console.log(house.showDetailsOfHouse());

// console.log(house.showDetailsOfHouse());




// constructor function
function Emailer (sendTo, sentFrom, message, subject) {
    this.receiver = sendTo;
    this.sentFrom = sentFrom;
    this.message  = message;
    this.subject  = subject;
    this.send     = function () {
        return this.message + ' (was) sent to ' + 
                this.receiver;
    }
}

const emailTotest = new Emailer ( 'testUser@email.com', 
    'me@email.com', 
    'Hi there', 
    'just testing system'
);

let msgSentDetaills = emailTotest.send();

console.log(msgSentDetaills);
console.log(emailTotest);

const emailToFriend1 = new Emailer (
    'friend@gmail.com', 
    'tester@gmail.com',
    'Hi friend, I\'m sending a message to you',
    'nothing much , just testing the system'
);

// console.log(emailTotest);
// console.log(emailToFriend1);

console.log(emailToFriend1.message);