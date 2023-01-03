/*Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7 */

let side1 =5;
let side2 =5;
let side3 =5;

let sinus = (side1+side2+side3)/2;
let area = Math.sqrt(sinus *((sinus-side1)*(sinus-side2)*(sinus-side3)))
console.log(`The area is: ${area}`);