/*
Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
*/

function convert() {
    let temperatureCelsius = document.getElementById("celsius-tmp").value;
    let temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
    document.getElementById("resultFarenheit").innerHTML = temperatureCelsius + "°C is " + temperatureFahrenheit + "°F";
}

function convertCelsius() {
    let tFahrenheit = document.getElementById("f-tmp").value;
    let tCelsius = ((tFahrenheit-32)*5/9);
    document.getElementById("resultCelsius").innerHTML = tFahrenheit + "°F is " + tCelsius + " °C";
}
