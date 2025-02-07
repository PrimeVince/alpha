const ck = document.getElementById("ck");
const javabtn = document.getElementById("javabtn");
const pythonbtn = document.getElementById("pythonbtn");
const cbtn = document.getElementById("cbtn");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const myChoice = document.getElementById("myChoice");

btn.onclick = function(){
    if(ck.checked){
        result.textContent = `You have subscribed :)`;
    }
    else{
        result.textContent = `You have not subscribed!!`;
    }
    

    if(javabtn.checked){
        myChoice.textContent = `You have chosen java`;
    }
    else if(pythonbtn.checked){
        myChoice.textContent = `You have chosen Python`;
    }
    else if(cbtn.checked){
        myChoice.textContent = `You have chosen C++`;
    }
    else{
        myChoice.textContent = `You have to make a choice!!`;
    }
       
}

