// DOM (Document Object Model)
const h1 = document.querySelector('h1');
// const h2 = document.querySelector("h2");

// we're changing the text content of the h1 element
// h1.textContent = 'New one';

// console.log(h1);

// we're changing the style of the HTML element (h1, in this case)
// h1.style = 'color: #fff; text-align: center; background-color: dodgerblue;';


// more into stylings
// h1.style.color           = 'white';
// h1.style.backgroundColor = 'teal';


// stylings h2
// h2.style.color = 'red';


// targeting using class
// querySelector
// const descText = document.querySelector(".description-text");

// difference between textContent and innerHTML
// descText.textContent = '<a href="#">Click here</a>';
// descText.innerHTML   = '<a href="#">Click here</a>';


// console.log(descText);

// targeting by id
// const h2 = document.querySelector("#secondary-text");
// h2.style.color = 'red';


// querySelectorAll()
let parasList = document.querySelectorAll('.para');
// parasList     = Array.from(parasList);

// parasList[2].style.color = 'red';

console.log(parasList);




// getElementById()
// const secondaryText = document.getElementById("secondary-text");

// secondaryText.textContent = 'Changed one';

// console.log(secondaryText);



// selcting using class name
const detailsContainer = document.querySelector(".details-container");

// adding id 
// detailsContainer.id = 'added-id';

// adding class
// detailsContainer.className = 'newClassName';

const lists = detailsContainer.classList;

// console.log(detailsContainer.classList);
// console.log(lists);

// console.log(lists[0]);
// console.log(lists[1]);

// adding class to an element
lists.add('new-added-className');

// removing class to an element
lists.remove("details-c");




// selecting demo-para
const demoPara = document.querySelector(".demo-para");

// parentElement
// console.log(demoPara.parentElement.parentElement);


// console.log(demoPara.parentElement.parentElement.parentElement);


// text-container
const textContainer = document.querySelector(".text-container");

let childrens = textContainer.children;

childrens[1].style.color = 'red';