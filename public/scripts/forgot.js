var password = document.getElementById("password");
var rePassword = document.getElementById("rePassword");

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

    return decimal.test(password.value);
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