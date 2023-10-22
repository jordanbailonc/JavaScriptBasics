const input1 = document.getElementById('numberInput1');
const input2 = document.getElementById('numberInput2');

//input1.addEventListener('input1',sumOrDouble)
//input2.addEventListener('input2',sumOrDouble)

function sumOrDouble(){
    let number1 = parseInt(input1.value);
    let number2 = parseInt(input2.value);
    debugger
    if(number1 == number2){
        document.getElementById('result').textContent = 'The triple of the sum of ' + number1 + ' is ' + (number1+number2)*3;
    }else{
        document.getElementById('result').textContent = "The sum of " + number1 + " and " + number2 + " is " + (number1+number2);
    }
}