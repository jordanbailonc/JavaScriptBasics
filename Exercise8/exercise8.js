/* Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then 
prompted to input a guess number. If the user input matches with guess number, the program will display 
a message "Good Work" otherwise display a message "Not matched" */

//Generate random number
let numGen = Math.random() * 10;
numGen = Math.round(numGen);
console.log(numGen);

//Check the number by the user
function checkInfo() {
  let Unumber = document.getElementById("numInput").value;
  if (Unumber === null || Unumber <= 0 || Unumber === undefined) {
    alert('The number is not positive or defined as it should.')
  } else {
    if (Unumber === numGen) {
      alert(`You choose the right number ${numGen}.`);
    } else {
      alert("Not matched");
    }
  }
}
