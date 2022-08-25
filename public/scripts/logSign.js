var userName = document.getElementById("userName"); 
var email = document.getElementById("email");
var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");


userName.addEventListener("keyup",nameValidate);
email.addEventListener("keyup",emailValidate);
password.addEventListener("keyup",passwordValidate);
rePassword.addEventListener("keyup",rePasswordValidate);


function validateSubmit()
{
    if(userName.value == ''){
        userName.classList.add('is-invalid');
        return false;
    }
    if(email.value == ''){
        userName.classList.add('is-invalid');
        return false;
    }
    if(password.value == ''){
        userName.classList.add('is-invalid');
        return false;
    }
    if(rePassword.value == ''){
        userName.classList.add('is-invalid');
        return false;
    }

    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    //console.log(decimal.test(password.value))

    return decimal.test(password.value) && password.value==rePassword.value;
}

function nameValidate() {
    var valid= /^[A-Z][a-z]{1,}$/;

    if(userName.value.match(valid))
    {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
    }
    else
    {
        userName.classList.add('is-invalid');
        userName.classList.remove('is-valid');
    }
}

function emailValidate() {
    var valid= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(valid))
    {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
    else
    {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
    }
}

function passwordValidate() {
    var valid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
   
    if(password.value.match(valid))
    {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }
    else
    {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
    }
}

function rePasswordValidate() {
    
    if(password.value==rePassword.value) 
    {
        rePassword.classList.remove('is-invalid');
        rePassword.classList.add('is-valid');
    }
    else
    {
        rePassword.classList.add('is-invalid');
        rePassword.classList.remove('is-valid');
    }
}