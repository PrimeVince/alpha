// while loop = while (condition) { code block }

let logedin = false;
let username;
let password;
const header = document.getElementById("header");

 do {
    username = prompt('Enter your username');
    password = prompt('Enter your password');
    if (username === 'Vince' && password === 'password') {
        logedin = true;
        header.textContent = `Welcome, ${username}`;
    } else {
        alert('Invalid username or password');
    }
}while (!logedin)