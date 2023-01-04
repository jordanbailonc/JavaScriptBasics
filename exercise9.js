/*Write a JavaScript program to calculate days left until next Christmas */

//Variables
today =new Date();
let nXmas = new Date(today.getFullYear(), 11, 25);
if(today.getMonth==11 && today.getDate()>25){
    nXmas.setFullYear(nXmas.getFullYear()+1)
}

const aDay=1000*60*60*24;
console.log(`${Math.ceil((nXmas.getTime()-today.getTime())/(aDay))} days until Xmas`)

/**
 today=new Date();
const cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);

 */