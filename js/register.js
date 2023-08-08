const form = document.querySelector('form#registerForm'); //get form
const typeRadio = form.querySelectorAll('.registration-radio'); //get both radio button
const fieldContainer = document.querySelector('.customerId');

// console.log(inputFields, 'inputFields')
console.log(typeRadio, 'typeRadio')
typeRadio.forEach(item => {
    item.addEventListener("change", (e) => {
        // Get the value of the selected radio button
        const selectedValue = e.target.value;
        console.log(selectedValue, 'selectedValue')
        // Show the additional fields corresponding to the selected radio button
        if (selectedValue === 'company') {
        form.classList.add('company');
        form.classList.remove('student'); // Remove 'student' class to hide student fields
        } else if (selectedValue === 'student') {
        form.classList.add('student');
        form.classList.remove('company'); // Remove 'company' class to show student fields
        }
    });
})

// Script for handle submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
    const actualForm = document.querySelector('form#registerForm')
    const formData = new FormData(actualForm);
    formData.append('userId',Date.now())
    let empData = {};
    for (var [key, value] of formData.entries()) { 
        empData[key] = value;
    }
    console.log(empData, 'empData');
    // Get existing data from localStorage or create an empty array
    let dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];
    if (!validateUserId(dataArray,empData)) {
    // Add the new form data to the array
    dataArray.push(empData);

    // Save the updated array back to localStorage
    localStorage.setItem("formDataArray", JSON.stringify(dataArray));   
    }
    else {
        alert('Duplicate record')
    }
    // // Clear the form after submission (optional)
    form.reset();
});


const validateUserId = (dataArray, empData) => {
    console.log(empData, 'empData')
    // console.log(dataArray.some(item=>item.emailaddress===empData.emailaddress));
    return dataArray.some(item=>item.emailaddress===empData.emailaddress && item.registrationType===empData.registrationType);
}