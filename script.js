//step:1 add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    // step:2 get the email address  inside the email input field
    //always remember to use.value to get text from  an input field
    const depositField = document.getElementById('');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //danger: do not verify email password client side
    // step:3 verify email password 
    if (email === 'munna@gmail.com' && password === '12345') {
        // console.log("valid email and password");

        window.location.href = 'bank.html';
    } else {
        alert(" invalid user")
    }
})