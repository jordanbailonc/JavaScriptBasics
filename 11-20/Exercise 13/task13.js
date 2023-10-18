

function splitIt(){
let name = document.getElementById("userData").value;
    let spellName = name.split('');
    console.log(name);
    let result = "";
    spellName.forEach(element => {
        result += element + " ";
    });
    document.getElementById("answer").textContent = result;
}
