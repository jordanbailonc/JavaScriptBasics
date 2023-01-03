/*Rotate a string from left to right */

function rotate_string(id){
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = 'example';
    //textNode.data;

setInterval(()=>{
    text = text [text.length -1] + text.substring(0,text.lenght -1);
    textNode.data = text
    console.log(text)
},100);
}