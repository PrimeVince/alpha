const btn = document.getElementById("btn");
const repay = document.getElementById("repay");


btn.onclick = function(){
    let loan = document.getElementById("money").value;
    loan = Number(loan);
    let t;

    if(loan <= 10000){
        t = 6;
    }
    else if(loan <= 50000){
        t = 9;
    }
    else if(loan <= 100000){
        t = 11;
    }
    else{
        t = 13;
    }
    let payment = loan + (loan * (t/100));
    payment = Number(payment);
    repay.textContent = `You will pay back ${payment}`;
    
}


