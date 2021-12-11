// we can create element using js
const a = document.createElement("a");

a.setAttribute("title", "this is custom div");
a.setAttribute("href", "https://google.com");
a.setAttribute("target", "_blank");

a.textContent = 'Visit Google now in the new tab';

// select list
const list = document.getElementById("list");

list.appendChild(a);

// console.log(a);

// const linkTitle = a.getAttribute('title');
// console.log(linkTitle);


