/* 
Ejercicio #5 Logica de programacion
*/
let numero = document.getElementById("numero");
let boton = document.getElementById("btn");
//asignando div de html
let resultado = document.getElementById("resultado");
let numeroAleatorio = Math.floor(Math.random() * 100);
let numerosingresados = [];

boton.addEventListener("click", () => {
  if (numero.value < 0 || numero.value > 100) {
    resultado.innerHTML =
      "Ingresa un número entre 0 y 100." + "<br>";
    console.log("Ingresa un número entre 0 y 100.");
  } else {
    numerosingresados.push(numero.value);
    if (numero.value == numeroAleatorio) {
      resultado.innerHTML =
        "Felicidades, adivinaste el número secreto." + "<br>";
      console.log("Felicidades, adivinaste el número secreto.");
      console.log("Los números que ingresaste fueron: " + numerosingresados);
      resultado.innerHTML +=
        "Los números que ingresaste fueron: " + numerosingresados;
    } else {
      resultado.innerHTML =
        "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
      console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
  }
});
console.log("El número secreto es: " + numeroAleatorio);
