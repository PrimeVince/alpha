// case
const output = document.getElementById("num");
const button = document.getElementById("btn");

button.onclick = function(){
    let day = document.getElementById("day").value;
    day = Number(day);

    switch(true){
        case day <= 5:
            output.textContent = `first week, first half`;
            break;
        case 2:
            output.textContent = `Tuesday`;
            break;
        case 3:
            output.textContent = `Wdnesday`;
            break;
        case 4:
            output.textContent = `hursday`;
            break;
        case 5:
            output.textContent = `Friday`;
            break;
        case 6:
            output.textContent = `Saturday`;
            break;
        case 7:
            output.textContent = `Sunday`;
            break;
        default:
            output.textContent = `Enter a valid day`;
            break;

    
    }
    
}
