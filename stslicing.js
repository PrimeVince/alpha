// string slicing

const button = document.getElementById('btn');
const username = document.getElementById('username');
const domain = document.getElementById('domain');

button.onclick = function() {
    let email = document.getElementById('email').value;
    let name = email.slice(0, email.indexOf('@'));
    let mail = email.slice(email.indexOf('@') + 1);

    username.textContent = `Username: ${name}`;
    domain.textContent = `Domain: ${mail}`;

}