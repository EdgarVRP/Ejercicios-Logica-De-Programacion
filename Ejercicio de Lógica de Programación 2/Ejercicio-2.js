/* 
Ejercicio #1 Logica de programacion
*/
function celciusFahrenheit(celcius){
    return (celcius*1.8)+32;
}
function celciusKelvin(celcius){
    return celcius+273.15;
}
let celcius;
while (isNaN(celcius)) { 
    if (isNaN(celcius)) {
        celcius=parseInt(prompt("Ingresa la temperatura en grados centigrados:"));
        if (isNaN(celcius)) {
            alert("Error, ingresa un numero valido");
        }
    }   
}

//Mostrando grado fahrenheit
console.log("Grado Fahrenheit: "+celciusFahrenheit(celcius));
localStorage.setItem("GradosFahrenheit",JSON.stringify(celciusFahrenheit(celcius)));
//Mostrando grado kelvin
console.log("Grado Kelvin: "+celciusKelvin(celcius));
localStorage.setItem("GradosKelvin",JSON.stringify(celciusKelvin(celcius)));
//Mostrando con alert
alert("Grado Fahrenheit: "+celciusFahrenheit(celcius)+"\nGrado Kelvin: "+celciusKelvin(celcius));