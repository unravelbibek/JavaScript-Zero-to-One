function Emailer (sendTo, sentFrom, message, subject) {
    this.receiver = sendTo;
    this.sentFrom = sentFrom;
    this.message  = message;
    this.subject  = subject;
}

Emailer.prototype.justDemoText = '123';
Emailer.prototype.send =  function () {
    return this.message + ' (was) sent to ' + 
            this.receiver;
};

// instance
const sendEmail  = new Emailer('friend@email.com', 'me@gmail.com', 'just testing', 'test');
// const sendEmail2 = new Emailer('friend@email.com', 'me@gmail.com', 'just testing', 'test');
// const sendEmail3 = new Emailer('friend@email.com', 'me@gmail.com', 'just testing', 'test');
// const sendEmai4 = new Emailer('friend@email.com', 'me@gmail.com', 'just testing', 'test');

let sentMsg = sendEmail.send();

// console.log(sendEmail.__proto__);

console.log(sentMsg);