/* 
Ejercicio #2 Logica de programacion
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
//asignando div de html
let resultado=document.getElementById("resultado");
//Mostrando grado fahrenheit
console.log("Grado Fahrenheit: "+celciusFahrenheit(celcius));
localStorage.setItem("GradosFahrenheit",JSON.stringify(celciusFahrenheit(celcius)));
//Mostrando grado fahrenheit en html
resultado.innerHTML="Grado Fahrenheit: "+celciusFahrenheit(celcius)+"<br>";
//Mostrando grado kelvin
console.log("Grado Kelvin: "+celciusKelvin(celcius));
localStorage.setItem("GradosKelvin",JSON.stringify(celciusKelvin(celcius)));
//Mostrando con alert
//Mostrando grado kelvin en html
resultado.innerHTML+="Grado Kelvin: "+celciusKelvin(celcius)+"<br>";
alert("Grado Fahrenheit: "+celciusFahrenheit(celcius)+"\nGrado Kelvin: "+celciusKelvin(celcius));