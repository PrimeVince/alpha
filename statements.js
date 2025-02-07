// if statement

const text = document.getElementById("txt");
const submit = document.getElementById("sub");
const para = document.getElementById("p1");

let age;

submit.onclick = function(){

    age = txt.value;
    age = Number(age);

    if(age <= 0 || age >= 110){
        para.textContent = `You can't enter site`;
    }
    else if(age >= 18){
        para.textContent = `Welcome to the sie`;
    }
    else{
        para.textContent = `You are too young`;
    }
    
    
}