window.onload=function() {
    var form  = document.getElementsByTagName('form')[0];
    var email = document.getElementById('mail');
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    email.addEventListener("input", function () {
    if (re.test(email.value)) {
        email.setCustomValidity('');
        email.reportValidity();
        email.style.border = '1px solid green';
    }
    else {
        email.style.border = '1px solid red';
    }
    }, false);

    form.addEventListener("submit", function (event) {
    if (!re.test(email.value)) {
        email.setCustomValidity('Ніт!');
        email.reportValidity();
        email.style.border = '1px solid red';
        event.preventDefault();
    }
    }, false);
}