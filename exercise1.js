/*1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

/*NECESSARY VARIABLES */
let firstSetence = "Hoy es:";
let secondSentence = "La hora es:";

const day = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();

/*FUNCTIONS FOR THE PROGRAM*/
function getMonthName(theMonth) {
    let monthName ='';
    switch (theMonth) {
      case 0:
        monthName = "Enero";
        break;
      case 1:
        monthName = "Febrero";
        break;
      case 2:
        monthName = "Marzo";
        break;
      case 3:
        monthName = "Abril";
        break;
      case 4:
        monthName = "Mayo";
        break;
      case 5:
        monthName = "Junio";
        break;
      case 6:
        monthName = "Julio";
        break;
      case 7:
        monthName = "Agosto";
        break;
      case 8:
        monthName = "Septiembre";
        break;
      case 9:
        monthName = "Octubre";
        break;
      case 10:
        monthName = "Noviembre";
        break;
      case 11:
        monthName = "Diciembre";
        break;
    }
    return monthName;
  }

let monthName = getMonthName(month);

let hourSettings = new Date().toTimeString();



/*ADDITION TO THE FINAL RESULTS */
firstSetence = `${firstSetence} ${day} de ${monthName} del ${year}`;
secondSentence = `${secondSentence} ${hourSettings}`;

console.log(firstSetence);
console.log(secondSentence);