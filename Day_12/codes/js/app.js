// JSON.stringify()
// JSON.parse()
/*
const mobile = {
    mobileName  : "Samsung",
    price       : 22000,
    modelNumber : "J2"
};

// this converts into JSON string
let str = JSON.stringify(mobile);

// converting to JS object
let jsObj = JSON.parse(str);

console.log(jsObj);
*/


// localStorage API
// localStorage.setItem('myName', 'test');

// let myName = localStorage.getItem("myName");

// console.log(myName);

// localStorage.removeItem('myName');

// localStorage.clear();


/*
let myName = 'test';

// ES6: template string
const myStr = `my name is ${myName}`;

console.log(str);
*/



/*
// insertAdjacentElement
const heroContainer = document.getElementById("hero-container");

// create element
const div = document.createElement("div");

// adding class name to the newlly created div
div.className = 'custom-div';

// adding content
div.textContent = 'Hi there i\'m newly added thing';

heroContainer.insertAdjacentElement('afterbegin', div);

console.log(heroContainer);
*/


// filter()
// scenario
const myFavBooks = [
    {
        author   : "Parijat",
        bookName : "The parijat",
        price    : 120
    },
    {
        author   : "Bill Gates",
        bookName : "The Road Ahead",
        price    : 100
    },
    {
        author   : 'J.K Rowling',
        bookName : 'The Harry Potter',
        price    : 150
    }
];

// filter()
let myFilteredItems = myFavBooks.filter(function(book) {
    // console.log(book.price);
    return book.price <= 100; // when it's true
});

console.log(myFilteredItems);

