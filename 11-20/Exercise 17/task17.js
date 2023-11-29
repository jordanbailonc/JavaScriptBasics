
const indexNumber = 19;
const inputNumber = document.getElementById('userInput');
inputNumber.addEventListener('input', calculateDiference);


function calculateDiference(){
    let absoluteDiference = Math.abs(indexNumber- Math.abs(inputNumber.value));
    console.log(absoluteDiference*3,`El triple de la diferencia entre el numero y ${indexNumber}`);
}