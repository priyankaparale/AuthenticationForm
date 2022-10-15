//access granted
//access denied

let userEmail, userPassord

const signUP () => {
    userEmail = document.getElementById('email').value
    userPassword = document.getElementById('password').value

    document.getElementById('')
}

const signIn () => {
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value

    if(enteredEmail === userEmail && enteredPassword === userEmail){
        alert('Access granted')
    }else{
        alert('Access denied')
    }
}



const goToHome = () => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('sign-up').style.display = 'none';
}

const goToSignUp = () => {
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('sign-in').style.display = 'none';
}

const goToSignIn = () => {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('sign-up').style.display = 'none';
}

//access granted
//access denied