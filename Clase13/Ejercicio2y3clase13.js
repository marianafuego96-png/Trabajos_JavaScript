/* ●	Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor*/

const encontrarMayor = function(a, b) { //se crea la fuction a y b parametros
  return a > b ? a : b; // condicion, si lo que devuelve a es condicion true, b es lo que devuelve si la conficion es  falso
};
//Ejercicio 3: Mensaje global y local Declara una variable global llamada saludoGlobal
//  con el valor "Hola desde el scope global". Luego, crea una función llamada mostrarMensaje
//  que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local"
//  y que imprima ambos mensajes.

// Variable global:
let saludoGlobal = "Hola desde el scope global";

function mostrarMensaje() {
  // Variable local:
  let saludoLocal = "Hola desde el scope local";

  console.log(saludoGlobal);
  console.log(saludoLocal);
}
