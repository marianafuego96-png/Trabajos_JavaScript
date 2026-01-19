/*Ejercicio 5: Uso de Arrays y Condicionales 
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en 
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se 
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su 
desarrollo)*/
const prompt = require("prompt-sync")({sigint:true});

let nombres = []; // aca se guardan los nombres
for (let i = 0; i < 5; i++) {
  let nombre = prompt(" Ingrese un nombre: "); // se solicita datos de entrada
  nombres.push(nombre); // nota: push mete el nombre dentro de array (aca me tiro error porque habia puesto primero nombre)
}

let buscarnombre = prompt("Ingresa el nombre que deseas buscar:"); // datos al usuario para verificar


if (nombres.includes(buscarnombre)) { // si nombres esta incluido dentro de buscar nombre, mostra x mensaje
  console.log("El nombre está incluido en el array.");
} else { // en caso que no estes, mostra el siguiente mensaje
  console.log("El nombre NO se encuentra en el listado");
}
