/*●	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.*/

const prompt = require("prompt-sync")({ sigint: true}); 
// le solicito los datos al userr
let precio = parseFloat(prompt("Ingresa el precio del producto:")); // usamos prompy
let iva = parseFloat(prompt("Ingresa el porcentaje de IVA:")); // pedimos dato de entrada iva

// Función flecha para calcular el precio final:
const calcularPrecioFinal = (precio, iva) => { // precio e iva son parametos 
  return precio + (precio * iva / 100); // calculo
};

// console log
let precioFinal = calcularPrecioFinal(precio, iva);
console.log("El precio final con IVA es: " + precioFinal);

/*●	Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.*/

// Solicitar calificaciones al usuario 1 x1, usamos prompt:
let calificacion1 = parseFloat(prompt("Ingresa la primera calificación:"));
let calificacion2 = parseFloat(prompt("Ingresa la segunda calificación:"));
let calificacion3 = parseFloat(prompt("Ingresa la tercera calificación:"));
let calificacion4 = parseFloat(prompt("Ingresa la cuarta calificación:"));
let calificacion5 = parseFloat(prompt("Ingresa la quinta calificación:"));

// Función flecha para calcular el promedio (misma funcion que el ejercicio anterior)
const calcularPromedio = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

// Calcular y mostrar el promedio
let promedio = calcularPromedio(calificacion1,calificacion2,calificacion3,calificacion4,calificacion5);
console.log("El promedio de las calificaciones es: " + promedio);

// cuando intente probarlo se rompio debido a que me habia olvidado de colocar prompt 

/* Clase15 
●	Ejercicio 1: Añadir personajes a una lista
Tienes una lista de personajes de videojuegos ["Link", "Zelda"].
 Agrega los personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. 
 Luego, muestra el array actualizado*/


// variable declarada personajes: 
let personajes = ["Link", "Zelda"];

// Agregar personajes al final del array:
personajes.push("Mario", "Luigi");

// console.log para mostrar resultados
console.log(personajes);


/*Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado
 y el estado actualizado de la lista*/

// incialmente tenemos los siguientes invitados guardados en la vb invitados
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

// Eliminar al último invitado
let invitadoEliminado = invitados.pop();

// Mostramos con console log quien fue el eliminado
console.log("Invitado eliminado:", invitadoEliminado);

// consolelog con actualizacion de la lista de invitados
console.log("Lista actualizada:", invitados);


