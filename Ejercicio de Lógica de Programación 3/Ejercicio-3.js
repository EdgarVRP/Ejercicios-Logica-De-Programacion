/* 
Ejercicio #3 Logica de programacion
*/
let numero;
while (isNaN(numero)||numero<0) { 
    if (isNaN(numero)||numero<0) {
        numero=parseInt(prompt("Ingresa un numero para calcular su factorial"));
        if (isNaN(numero)) {
            alert("Error, ingresa un numero valido");
        }
        else if(numero<0){
            alert("Error, ingresa un numero positivo");
        }
    }   
}

//Haciendo calculo de factorial
const calculoFactorial = (numero) => {
    let factorial=1;
    for (let i = 1; i <= numero; i++) {
    factorial=factorial*i;
}
return factorial;
}
//asignando div de html
let resultado=document.getElementById("resultado");
//Mostrando resultado
//consola
console.log("El factorial de "+numero+" es : "+calculoFactorial(numero));
//local storage
localStorage.setItem("factorial",calculoFactorial(numero));
//alert
alert("El factorial de "+numero+" es : "+calculoFactorial(numero));
//html
resultado.innerHTML="El factorial de "+numero+" es : "+calculoFactorial(numero);