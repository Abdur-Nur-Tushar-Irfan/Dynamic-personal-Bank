document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const emailValue = emailField.value;
    const passField = document.getElementById('password-filed')
    const passValue = passField.value;
    if (emailValue === 'tusharctg1202@gmail.com' && passValue === 'MC213002') {
        window.location.href = 'bankInside.html';
    }
    else {
        alert('This is invalid email and pass please enter valid emial and pass')
    }


})