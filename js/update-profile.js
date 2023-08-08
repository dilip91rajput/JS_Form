const updateProfile = document.querySelector('form#userProfile');
const userData = JSON.parse(localStorage.getItem('updatedData')) || {};
const dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

document.querySelector('.name').value = userData.name || '';
document.querySelector('.email').value = userData.emailaddress || '';
document.querySelector('.address').value = userData.address || '';
document.querySelector('.phone').value = userData.phone || '';
document.querySelector('.email').readOnly = true;
// document.querySelector('.usertype').value = userData.registrationType || '';
// document.querySelector('.studentid').value = userData.studentID || '';
// document.querySelector('.companyname').value = userData.companyName || '';

updateProfile.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target.value, "update Profile");
    const formData = new FormData(updateProfile);
    let profileData = {};
    for (var [key, value] of formData.entries()) { 
        profileData[key] = value;
    }
    console.log(profileData, 'profileData');

    // update object user data
    const dataUpdated = {
        ...userData,
        name: profileData.name,
        phone: profileData.phone,
        email: profileData.emailaddress,
        address: profileData.address,
    }

    console.log(dataUpdated, 'sdsads')

    //update array of obeject with user data
    const arrayData = dataArray.map((item) => {
        if (item.userId === userData.userId)
            return {
                ...item,
                name: profileData.name,
                phone: profileData.phone,
                emailaddress: profileData.emailaddress,
                address: profileData.address
            }
        return item; //return the original item if the condition is not met
    });
    
    // localStorage.setItem = ('updatedData', JSON.stringify(dataUpdated));
    localStorage.setItem("updatedData", JSON.stringify(dataUpdated));
    localStorage.setItem("formDataArray", JSON.stringify(arrayData));
})
