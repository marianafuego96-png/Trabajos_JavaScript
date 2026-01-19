/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente hasta 
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los 
números ingresados.*/

const prompt = require ("prompt-sync")({sigint : true}); // para pedirle los datos al user

let suma = 0 // cero pero siempre se empieza desde cero
let numerouser; // no le damos valor porque depende de lo que coloca el usuario

while (true) { // intentos
  numerouser = parseFloat(prompt("Ingresa un número, por favor el ultimo negativo:  ")); // dato de entrada

  if (numerouser < 0) { // cuando lo ejecute tuve un error, es numerouser y deje numero
    break;
  }

  suma += numerouser;
}

console.log("Total: ", suma);


