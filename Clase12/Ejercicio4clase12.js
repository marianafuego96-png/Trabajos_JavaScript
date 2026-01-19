/* Ejercicio 4: Ciclo For - Array 
Crear un programa que permita registrar las notas de varios estudiantes usando 
arrays y mostrarlas por pantalla: 
1. 
Crear un array para almacenar las notas. 
2. Define un array vacío llamado notas donde almacenaremos las notas de los 
estudiantes. 
3. Pide al usuario que ingrese las notas de varios estudiantes una por una 
utilizando el método prompt. 
4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
posiciones específicas del array notas. 
5. Imprime en consola las notas ingresadas usando el array nota*/

const prompt = require("prompt-sync")({sigint:true});

// 1 y 2. Crear un array null para almacenar las notas
let notas = [];

// Cantidad de estudiantes
let cantidadEstudiantes = parseInt(prompt("Cuántos estudiantes vas a ingresar?"));

// 3 y 4. Pedir las notas usando prompt y guardarlas en el array
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nota = parseFloat(prompt("Ingresa la nota del estudiante " + (i + 1)));
    notas[i] = nota; // asignación directa a la posición del array
}

//muestro notas en consola
console.log("Notas ingresadas:");
for (let i = 0; i < notas.length; i++) {
    console.log("Estudiante " + (i + 1) + ": " + notas[i]);
}


