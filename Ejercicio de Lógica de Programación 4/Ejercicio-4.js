/* 
Ejercicio #4 Logica de programacion
*/

let numero;
while (isNaN(numero)||numero<0) { 
    if (isNaN(numero)||numero<0) {
        numero=parseInt(prompt("Ingresa un numero para calcular la serie fibonacci asociada:"));
        if (isNaN(numero)) {
            alert("Error, ingresa un numero valido");
        }
        else if(numero<0){
            alert("Error, ingresa un numero positivo");
        }
    }   
}

//Haciendo calculo de fibonacci
const calculoFibonacci = (numero) => {
    let fibonacci=0;
    let fibonacciAnterior=0;
    let fibonacciAnteriorAnterior=1;
    for (let i = 1; i <= numero; i++) {
        /*
        console.log("Iteracion "+i);
        console.log("Fibonacci: "+fibonacci);
        console.log(fibonacci);
        console.log("Fibonacci Anterior: "+fibonacciAnterior);
        console.log(fibonacciAnterior);
        console.log("Fibonacci Anterior Anterior: "+fibonacciAnteriorAnterior);
        console.log(fibonacciAnteriorAnterior);
        */
        fibonacci=fibonacciAnterior+fibonacciAnteriorAnterior;
        fibonacciAnteriorAnterior=fibonacciAnterior;
        fibonacciAnterior=fibonacci;
    }
    return fibonacci;
}
//asignando div de html
let resultadohtml=document.getElementById("resultado");
//Mostrando resultado
//consola
let resultado=calculoFibonacci(numero);
console.log("La serie fibonacci de "+numero+" es : "+resultado);
//local storage
localStorage.setItem("fibonacci",calculoFibonacci(numero));
//alert
alert("La serie fibonacci de "+numero+" es : "+calculoFibonacci(numero));
//html
resultadohtml.innerHTML="La serie fibonacci de "+numero+" es : "+calculoFibonacci(numero);