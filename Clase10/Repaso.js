//Ejercicio 1 - Declarar dos variables: Nuestra tarea será declarar dos variables: una
//con el nombre edad y la otra con el nombre peso. Después deberás asignarle un
// valor.

//Ejercicio 2 – Usando las variables: Escribe un programa que pida al usuario que
//ingrese su nombre, su edad y su peso, y luego muestre un mensaje
// personalizado que incluya toda esta información.

const prompt= require("prompt-sync")({siginit: true});
let edad = prompt("Hola, ingresa tu edad: ");
let peso = prompt("Ahora ingresa tu peso: "); 
let nombre = prompt("Y por ultimo, como te llamas?"); {
console.log (`Bienvenida ${nombre}, tu edad es ${edad} y pesas ${peso} kg`);}

// Ejercicio 3 – Constantes / Validación de Edad: Más adelante vamos a querer
// validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de
// edad máxima.

const EDAD_MINIMA = 18
const EDAD_MAXIMA = 99
let years = Number(prompt("Hola, por favor ingresa tu edad: "));//Tuve que usar otro nombre porque entraba en conflicto con el ejercicio1
if (years < EDAD_MINIMA) {
    console.log("Lo lamento, sos menor de edad");
}
else if (years >= EDAD_MINIMA){
    console.log ("Sos mayor de edad, felicidades!");
}





