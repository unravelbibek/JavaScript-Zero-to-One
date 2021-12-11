const btn = document.querySelector("#custom-btn");
const topHeadingText = document.querySelector(".top-heading-text");

/*
// click event
btn.addEventListener("click", function(event) {

    // console.log(event);

    // changed the conotent of the text, when user clicks on the button
    topHeadingText.textContent = 'Changed one';

    // changed the color of the heading
    topHeadingText.style.color = 'red';

    // position from the button itself when clicked onto it
    // console.log(event.offsetX);
    // console.log(event.offsetY);

});
*/


/*
const form = document.querySelector("#contact-service");

form.addEventListener("submit", function(e) {

    const firstName = document.querySelector("#first-name");
    const lastName  = document.querySelector("#last-name");

    console.log(firstName.value);
    console.log(lastName.value);
    
    // this prevents the page from being re-loaded
    e.preventDefault();
});
*/

// first-name

const firstName = document.querySelector("#first-name");

firstName.addEventListener("focus", focusEvtFunc);

function focusEvtFunc(e) {
    firstName.style = 'border: 1px solid red;';
    console.log(123);
}

firstName.addEventListener("blur", function() {
    // validation logic can go here

    console.log('This is blur');
});



// DOM traversing
const textContainer = document.querySelector(".text-container");

console.log(textContainer.firstElementChild);
console.log(textContainer.lastElementChild);