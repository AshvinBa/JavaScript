var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName()
{
    var name = document.getElementById('contact-name').value;

    if(name.length == 0)
    {
        nameError.innerHTML= 'Name is necessary.';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
    {
        nameError.innerHTML = 'Last Name is Required.';
        return false;
    }
    nameError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>`;
    return true;
}

function validPhone()
{
    var phone = document.getElementById('phone').value;

    if(phone.length !=10)
    {
        phoneError.innerHTML = 'Number is necessary.';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML = 'Please only enter digit.';
        return false;
    }
    phoneError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>`;              
    return true;
}


function validEmail()
{
    var email = document.getElementById('email').value;

    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is neecssary.';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML = 'Email Invalid.';
        return false;
    }
    emailError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>`;
    return true;
}

function validMessage()
{
    var message = document.getElementById('message').value;

    if(message.length == 0)
    {
        messageError.innerHTML = 'Message is necessary.';
        return false;
    }
    if(message.length < 30)
    {
        messageError.innerHTML = 'Message is not suffuciant. ';
        return false;
    }
    messageError.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>`;
    return true;
}

function validateForm()
{
    if(!validateName() || !validPhone() || !validEmail() || !validMessage())
    {
        submitError.style.display ='block';
        submitError.innerHTML = 'Pleaase Fix the Error.';
        setTimeout(function(){submitError.style.display = 'none' ;}, 3000);
        return false;
    }
}










