const userData = JSON.parse(localStorage.getItem('updatedData'));

document.querySelector('.name').innerText = userData.name;
document.querySelector('.email').innerText = userData.emailaddress;
document.querySelector('.address').innerText = userData.address;
document.querySelector('.phone').innerText = userData.phone;
document.querySelector('.usertype').innerText = userData.registrationType;
document.querySelector('.studentid').innerText = userData.studentID;
document.querySelector('.companyname').innerText = userData.companyName;

// Script for click on edit button
const editbttn = document.querySelector('.edit');
console.log(editbttn, 'edit')
editbttn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'update-profile.html'
    // const retrievedValue = localStorage.getItem("updatedData");
    // const inputField = document.querySelectorAll('.form-control');
    // if (retrievedValue !== null) {
    //     inputField.value = retrievedValue;
    // };
})
//  Update User Profile Data Function

// const editbttn = document.querySelector('.edit');

// const checkfield = document.querySelectorAll(".input-field");
// console.log(checkfield, 'checkfield')
// console.log(editbttn, 'edit')
// editbttn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const selectbtn = e.target.value;
//     console.log(selectbtn, 'bttnnnn')
//     checkfield.forEach(element => {
//         element.setAttribute('contenteditable', 'true')
//     })

// })

// // Modal function script

// // Get the modal
// var modal = document.querySelector(".modal");

// // Get the button that opens the modal
// var btn = document.querySelector('.edit');

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

