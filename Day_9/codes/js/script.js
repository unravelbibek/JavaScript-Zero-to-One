// class syntax // It's ES6 feature
// parent class
class Emailer {
    constructor(sendTo, sentFrom, message, subject) {
        this.receiver = sendTo;
        this.sentFrom = sentFrom;
        this.message  = message;
        this.subject  = subject;
    }

    send () {
        return this.message + ' (was) sent to ' + this.receiver;
    }

}

// child class
// advanced features for sending email
class AdvancedEmailer extends Emailer {
    constructor(sendTo, sentFrom, message, subject, file, location ) {
        
        super(sendTo, sentFrom, message, subject);
        // super();

        // extra features
        this.file     = file;
        this.location = location;

    }

    send() {
        return this.file + ' - was sent from ' + this.location;
    }

}

// const sendEmail = new Emailer('friend@email.com', 
//     'tester.com', 
//     'Hello, this is just a hello message', 
//     'nothing much'
// );

// console.log(sendEmail.send());

const sendAdvEmail = new AdvancedEmailer('friend1@gmail.com', 'tester@gmail.com', 'hi there', 'test', 'image.jpg', '...');

console.log(sendAdvEmail.send());