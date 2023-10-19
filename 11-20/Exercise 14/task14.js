/*Write a JavaScript exercise to get the filename extension*/

const input = document.getElementById('userInput');
input.addEventListener('input', searchExtension);

function searchExtension() {
    let inputValue = input.value;
    if(!inputValue.includes(".")){
        document.getElementById("result").innerText = "The current text doesn't contain any extension";
    }else{
        let result = inputValue.split('.').pop();
        if (result !== '' && result !== null ) {
            document.getElementById("result").innerText = "The input text includes the extension" + result;
        }
    }
}