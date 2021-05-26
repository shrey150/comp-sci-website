/*
alert("Hi! This is the Comp Sci Club Website!"); // "OK"
confirm("Are you above the age of 18?"); // "YES/NO" (OK/Cancel)
let name = prompt("What is your name?"); // "Input box"
*/

// Document Object Model (DOM)
// interaction b/t JavaScript and HTML

REAL_USERNAME = "shrey";
REAL_PASSWORD = "qwerty";

function updateText() {

    // .innerHTML and .innerText
    // document.querySelector()

    let updateEl = document.querySelector("#updateEl");
    let textArea = document.querySelector("#bigTextArea");

    // set the <p> tag to the <textarea> text from the user
    updateEl.innerHTML = textArea.value;
}

function authenticate(event) {

    console.log("Starting to authenticate...");
    event.preventDefault();

    // get username and password entered by the user
    username = document.querySelector("#usernameField").value;
    password = document.querySelector("#passwordField").value;

    // authenticate the user
    if (username === REAL_USERNAME && password === REAL_PASSWORD) {
        // the user is signed in
        alert("Sign in successful!");

        // redirect the user to the secret page
        window.location.href = "secret.html";
    }
    else {
        alert("Invalid username or password, try again");
    }
}