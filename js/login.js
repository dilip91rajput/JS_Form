const loginForm = document.querySelector("form#loginForm");
console.log(loginForm, 'login form')
//Script to hanlde login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target.value, "login");
    const formData = new FormData(loginForm);
    let loginData = {};
    for (var [key, value] of formData.entries()) { 
        loginData[key] = value;
    }
    console.log(loginData, 'loginData');
    const dataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];
    const matchUser = dataArray.filter(items => items.emailaddress===loginData.username && items.password===loginData.password)
    console.log(matchUser, 'matchUser')
    // console.log(dataArray[2], 'matchUser')
    if (matchUser.length > 0) {
        alert('found')
        localStorage.setItem("isLoggedIn", true);

        localStorage.setItem("updatedData", JSON.stringify(matchUser[0]));
        window.location.href = 'dashboard.html'
       
    } else {
        localStorage.setItem("isLoggedIn", false);
        alert('not-found')
    }
})
