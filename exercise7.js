/*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. */

//VARIABLES OF WORK (CHANGE TO TEST NEW NUMBERS)
const initYear = 2014;
const endYear = 2050;

let theDay = new Date();

//MAIN LOGIC PROGRAM
console.log("The years that starts on Sunday between 2014 and 2050 are: \n")
for (i = initYear; i < endYear; i++) {
  theDay = new Date(`${i}-01-01`).getDay();
  if (theDay === 0) {
    console.log(`${i}-01-01`);
  }
}
