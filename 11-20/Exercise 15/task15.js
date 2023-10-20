
const interlog = 13;
const input = document.getElementById('numberInput');
input.addEventListener('input', searchDiference);

function searchDiference() {
    let numberInserted = parseInt(input.value);
    if (numberInserted > interlog){
        document.getElementById('result').textContent = 'The double of the difference between 13 and ' + numberInserted + ' is ' + (numberInserted-interlog)*2;
    }else if (numberInserted <= interlog){
        document.getElementById('result').textContent = 'The double of the difference between 13 and ' + numberInserted + ' is ' + (interlog-numberInserted);
    }
}