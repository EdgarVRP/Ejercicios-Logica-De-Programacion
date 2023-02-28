/* 
Ejercicio #1 Logica de programacion
*/
let numeros=[];
for (let i = 0; i < 3; i++) {
    while (isNaN(numeros[i])) { 
        if (isNaN(numeros[i])) {
            numeros[i]=parseInt(prompt("Ingresa el numero "+(i+1)+":"));
        }   
    }
}
//obtenidendo div de html
let resultado=document.getElementById("resultado");
//Ordenando los numeros de menor a mayor
numeros.sort((a,b)=>a-b);
//Mostrando los numeros ordenados de menor a mayor en consola
console.log("Numeros ordenados de menor a mayor: "+numeros);
//Guardando los numeros ordenados de menor a mayor en el localstorage
localStorage.setItem("numeros-MenorMayor",JSON.stringify(numeros));
//mostrando los numeros ordenados de mayor a menor en el html
resultado.innerHTML="Numeros ordenados de menor a mayor: "+numeros+"<br>";
//Intercambiando orden de los numeros
numeros.reverse();
//Mostrando los numeros ordenados de mayor a menor en consola
console.log("Numeros ordenados de mayor a menor: "+numeros);
//Guardando los numeros ordenados de mayor a menor en el localstorage
localStorage.setItem("numeros-MayorMenor",JSON.stringify(numeros));
//Mostrando los numeros ordenados de mayor a menor en el html
resultado.innerHTML+="numeros ordenados de mayor a menor: "+numeros+"<br>";
//Mostrando numeros repetidos en consola
console.log("Numeros repetidos: "+numeros.filter((item,index)=>numeros.indexOf(item)!=index));
//Guardando numeros repetidos en el localstorage
localStorage.setItem("numeros-Repetidos",JSON.stringify(numeros.filter((item,index)=>numeros.indexOf(item)!=index)));
//Mostrando numeros repetidos en el html
resultado.innerHTML+="Numeros repetidos: "+numeros.filter((item,index)=>numeros.indexOf(item)!=index)+"<br>";
//Mostrando en alert
alert("Numeros ordenados de menor a mayor: "+numeros+"\nNumeros ordenados de mayor a menor: "+numeros.reverse()+"\nNumeros repetidos: "+numeros.filter((item,index)=>numeros.indexOf(item)!=index));