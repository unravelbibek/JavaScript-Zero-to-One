// UI elements
const form         = document.querySelector(".details-collector-form"),
      cards        = document.querySelector(".cards"),
      email        = document.querySelector("#email"),
      fullName     = document.querySelector("#full-name"),
      mobileNumber = document.querySelector("#mobile-number"),
      role         = document.querySelector("#role");

// show the saved items on localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {

    // steps
    // get the items from the localStorage
    let empDatas = JSON.parse(localStorage.getItem("employeeDetails"));
    // console.log(empDatas);

    // check if data is not null
    if (empDatas !== null) {

        // looping over the datas
        empDatas.forEach(function(data) {
            // create an element
            const div = document.createElement("div");
    
            // add class name card
            div.className = 'card';
    
            div.innerHTML = `
                <b>Officer's desk</b>
                <div class="card-inner">
                    <div class="card-inner-item">
                        <b>Role</b>
                        <p>${data.role}</p>
                    </div>
                    <div class="card-inner-item">
                        <b>Contact</b>
                        <p>${data.email}</p>
                        <p>${data.mobileNumber}</p>
                    </div>
                    <div class="card-inner-item">
                        <b>Full name</b>
                        <p>${data.fullName}</p>
                    </div>
                </div>
                <div>
                    <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
                </div>
            `;
    
            // cards.appendChild(div);
            cards.insertAdjacentElement("beforeend", div);
    
        });

    }

});

// console.log(form);
form.addEventListener("submit", function(e) {

    // steps
    // get the value from the inputs

    // check if all the inputs are filled
    if ( email.value !== '' && fullName.value !== '' && mobileNumber.value !== '' && role.value !== '' ) {

        // create a div
        const div = document.createElement("div");
    
        // add class to the created div
        div.className = 'card';
    
        // add the html codes/content to the innerHTML property of the  newly created element
        let htmlTemplate = `
            <b>Officer's desk</b>
            <div class="card-inner">
                <div class="card-inner-item">
                    <b>Role</b>
                    <p>${role.value}</p>
                </div>
                <div class="card-inner-item">
                    <b>Contact</b>
                    <p>${email.value}</p>
                    <p>${mobileNumber.value}</p>
                </div>
                <div class="card-inner-item">
                    <b>Full name</b>
                    <p>${fullName.value}</p>
                </div>
            </div>
            <div>
                <div class="trash-container"><i class="fa fa-trash trash-icon"></i></div>
            </div>
        `;
    
        // add template to the div
        div.innerHTML = htmlTemplate;
    
        // show it on the screen
        cards.insertAdjacentElement("beforeend", div);

        // show success message
        // create an element
        const errorDiv = document.createElement("div");

        // add class
        errorDiv.className = 'success-message';

        // add the text content
        errorDiv.textContent = 'Details added successfully.';

        // show it on the UI
        form.insertAdjacentElement('beforebegin', errorDiv);

        // remove success message after few seconds
        setTimeout(function() {
            errorDiv.remove();
        }, 4000);


        // store it on the locaStorage
        if ( localStorage.getItem("employeeDetails") === null ) {
            let arr = [];
            arr.push({ email: email.value, mobileNumber: mobileNumber.value, role: role.value, fullName: fullName.value });
            localStorage.setItem('employeeDetails', JSON.stringify(arr));
        } else {
            let arr = [];
            arr = JSON.parse(localStorage.getItem("employeeDetails"));
            arr.push({ email: email.value, mobileNumber: mobileNumber.value, role: role.value, fullName: fullName.value });
            localStorage.setItem('employeeDetails', JSON.stringify(arr));
        }

        // clear the input fields
        email.value        = '';
        mobileNumber.value = '';
        role.value         = '';
        fullName.value     = '';

        // focus on the email input
        email.focus();

    } else {
        
        if (document.querySelector(".error-message") === null) {

            // show error message when the fields are empty
            // create element to show error message
            const errEl = document.createElement("div");
            
            // add class
            errEl.className = 'error-message';
    
            // add the text content
            errEl.textContent = 'Please fill  in the fields';
    
            // show error message to the UI
            form.insertAdjacentElement("beforebegin", errEl);
    
            // make that error message disappear after few seconds
            setTimeout(function() {
                errEl.remove();
            }, 4000);

        }

    }

    e.preventDefault();
});

// for the delete functionality
document.body.addEventListener("click", function(e) {

    // delete from UI
    if (e.target.classList.contains("trash-icon")) {

        e.target.parentElement.parentElement.parentElement.remove();

        // delete from localStorage
        let employeeDetails = JSON.parse(localStorage.getItem("employeeDetails"));
    
        // took phone number from the UI
        let phoneNumber = e.target.parentElement.parentElement.previousElementSibling.children[1].children[2].textContent;
    
        // console.log(phoneNumber);
    
        // we want to collect the non-matching phone numbers
        let filteredDetails = employeeDetails.filter(function(empDetail) {
            return phoneNumber !== empDetail.mobileNumber;
        });
    
        // save the other data to the localStorage again
        localStorage.setItem("employeeDetails", JSON.stringify(filteredDetails));
    
        // show message for successfully deletion
    
        // console.log(employeeDetails);
    }

});