//access granted
//access denied
//only one user suppport make it multiple user support
//changing navbar = sign up then does not show in navigation -Hi, Priyanka  signout vice-versa sign out then nav bar then- signin and sign out
//encryption(abc converted into some/any value) =(object[key] )and decryption to user data (password should not be seen to anyone)

//give anchor tag of signup id=btn1
// const btn = document.getElementById('btn1')
// btn.addEventListener('click', function handleClick(){
//     btn.textContent = 'Hi, Priyanka'
// })

const USERS_DB = [];

const encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'_': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': '_'
}

const encrypt = (inputString) => {
    let encryptedString = ''
    for(let char of inputString){
        encryptedString = encryptedString + encryptionRule[char]
    }
    return encryptedString
}

const decrypt = (decryptedString) => {
    let originalString = ''

    let keys = Object.keys(encryptionRule)
    let values = Object.values(encryptionRule)
    for(let char of inputString){
        let requiredIndex = values.indexOf(char)
        originalString = originalString + keys[requiredIndex]
    }
    console.log(originalString)
    return originalString
}


const signUp = () => {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('last-Name').value
    let email = document.getElementById('email').value
    let phonenumber = document.getElementById('phone-number').value
    let password = document.getElementById('password').value
    
    let encryptedPassword = encrypt(password)

    document.getElementById('sign-up-form').reset()

    let userdetails = {
        firstName,
        lastName,
        email,
        phonenumber,
        password: encryptedPassword,
    };

    USERS_DB.push(userdetails)

    // alert('Sign up successful!')
    console.log(USERS_DB)
    console.log('Sign up successful!')

    changeNavLinks(userdetails)
}

const signIn = () => {
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value


    // wheather that users email exots
    // wheather password matches
    // not use filter method we use find method which returns true or false is that element exits in an array (if empty =truthy if undefined = falsy)
    // arrao function function one liner code, index is not used so ) this is not required
    let requireUser = USERS_DB.find(function(user,email) {
        return user.email === enteredEmail && user.password === enteredPassword
    })

    //one line code
    // let requiredDetails = USERS_DB.find(user => user.email === enteredEmail && user.password === enteredPassword
    // )

    if(requireUser){
        console.log('Access granted')
    }else{
        console.log('Access denied')
    }

    // if(enteredEmail === email && enteredPassword === password){
    //     alert('Access granted')
    // }else{
    //     alert('Access denied')
    // }
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

//save all details - fetch all value ... used object userdetails (save all user details)
//multiple support - array of obj USERS_DB (store obj in array)

const changeNavLinks = (currentUser) =>{
    //destructuring ES6 concept
    let{firstName, lastName} = currentUser

    document.getElementById('sign-up-nav-link').style.display = 'none'
    document.getElementById('sign-in-nav-link').style.display = 'none'
    document.getElementById('profile-nav-link').style.display = 'block'
    document.getElementById('sign-out-nav-link').style.display = 'block'

    document.getElementById('profile-nav-link').innerText = 'Hi, ${firstName} ${lastName}'
}

const signOut = () =>{
    document.getElementById('profile-nav-link').innerText = 'none'

    document.getElementById('sign-up-nav-link').style.display = 'block'
    document.getElementById('sign-in-nav-link').style.display = 'block'
    document.getElementById('profile-nav-link').style.display = 'none'
    document.getElementById('sign-out-nav-link').style.display = 'none'
}


// const inputString = 'Test123'
// console.log(inputString)
// let encryptedString = encypt(inputString)
// console.log(encryptedString)
// let decryptedString = decrypt(encryptedString)
// console.log(decryptedString)

// let requiredUser = USERS_DB.find(function(user, index) {
// 	return user.email === enteredEmail && user.password === enteredPassword
// })
