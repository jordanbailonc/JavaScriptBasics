/*Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar */

/*FUNCTIONS */
function checkNumbericContent(theYear){
    let result = false
    if(typeof theYear==="number"){
        result = true
    }
    return result
}

function getResult(theYear){
    if((theYear % 100 ===0) && (theYear % 400===0) && (theYear %4 ===0)){
        console.log(`The year ${theYear} is a leap year`);
    }else{
        console.log(`The year ${theYear} is not a leap year`);
    }
}


/*MAIN RUNNING PROGRAM */
const thisYear = new Date().getFullYear();
let yearInput = document.getElementById("year-input");
let outputParagraph = document.getElementById("answ");
let submitButton = document.getElementById("check-button");

submitButton.addEventListener("click", notify);

// Chooses and shows message (by comparing inputted year to current year)
function notify(){

    const userYear = yearInput.value;
    let message;

    if ((userYear%100 !=0  && yearInput%4 ==0) || (userYear%400 ==0)){
        message = `The number ${userYear} is a leap year`;
    }else{
        message = `The number ${userYear} is  not a leap year`
    }

    outputParagraph.textContent = message;
  }