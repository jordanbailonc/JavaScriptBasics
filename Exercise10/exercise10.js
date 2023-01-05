
/*Write a JavaScript program to calculate multiplication 
and division of two numbers (input from user). */

let number1;
let number2;
let info = document.getElementById("answ");


function multiply(){

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    if(number2===undefined || number2===null|| number1==undefined|| number2===null){
        alert('To multiply the numbers must be defined.')
    }else{
        let msg;
        let result = number1*number2;
        msg = `The result is: ${(result)}`;
        info.textContent = msg;
    }
}

function divide(){

    number1 = document.getElementById("num1").value;
    number2 = document.getElementById("num2").value;

    if(number2===0 || number2===undefined || number2===null){
        alert('The second number must be defined.')
    }else{
        let msg;
        let result = number1/number2;
        msg = `The result is: ${(result)}`;
        info.textContent = msg
    }
    
}