function Emailer (sendTo, sentFrom, message, subject) {
    this.receiver = sendTo;
    this.sentFrom = sentFrom;
    this.message  = message;
    this.subject  = subject;
}

Emailer.prototype.send =  function () {
    return this.message + ' (was) sent to ' + 
            this.receiver;
};

const emailTotest = new Emailer ( 'testUser@email.com', 
    'me@email.com', 
    'Hi there', 
    'just testing system'
);

// let msgSentDetaills = emailTotest.send();

const emailToFriend1 = new Emailer (
    'friend@gmail.com', 
    'tester@gmail.com',
    'Hi friend, I\'m sending a message to you',
    'nothing much , just testing the system'
);

console.log(emailTotest);
console.log(emailToFriend1);