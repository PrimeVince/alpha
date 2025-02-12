// metod chaining

let username = window.prompt("Enter your username: ");
let firstName = username.slice(0, username.indexOf(" "));
let lastName = username.slice(username.indexOf(" ") + 1);

firstName = firstName.trim().charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName.trim().charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

let usrname = `${firstName} ${lastName}`;
console.log(usrname);