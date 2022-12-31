/*Write a JavaScript program to get the current date */

let stringResult = 'The current date is: ';

const day = new Date().getDate()
const month = new Date().getMonth()
const year = new Date().getFullYear()

stringResult = `${stringResult} ${month}/${day}/${year} or ${day}-${month}-${year}`
console.log(stringResult)