const updatePwdForm = document.querySelector('form#updatePwdForm');
//    console.log(updatePwdForm, 'updatePwdForm');

updatePwdForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(updatePwdForm);
    // console.log(formData, 'formData')
    let profileData = {};
    for (var [key, value] of formData.entries()) {
        profileData[key] = value;
    }
    // console.log(profileData, 'profileData');
    var dataObject = JSON.parse(localStorage.getItem("updatedData"))  || {};
    // console.log(dataObject, 'dataObject');

    let dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];

    const matchUser = dataObject.password === profileData.currentpwd
    // console.log(matchUser, 'matchUser')
   
    // // update object password key value 
    // dataObject.password = profileData.newpwd;
    // dataObject.confirmpassword = profileData.confirmpwd;
    // update object user data
    const dataUpdated = {
        ...dataObject,
        password: profileData.newpwd,
        confirmpassword: profileData.confirmpwd,
    }

    //update array of obeject password key value
    const updateData = dataArray.foreach((item) => {
        if(item.userId === dataObject.userId)
            return {
                ...item, password: profileData.newpwd, confirmpassword: profileData.confirmpwd
            }
        return item; //return the original item if the condition is not met
    });
    // console.log(reformattedArray, 'reformattedArray')
    
    // set updated username and pwd to local storage.
    if (matchUser > 0) {
        localStorage.setItem("updatedData", JSON.stringify(dataUpdated));
        localStorage.setItem("formDataArray", JSON.stringify(updateData));
        alert ('match')
    } else {
        alert ('not match')
    }

});

