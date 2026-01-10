// Crear un programa de sistema de calificacion basado en la nota del estudiante
// Valor numero del 0 al 100, segun las siguientes condiciones:
// Si la nota es menor a 60 es reprobado
// Si la nota es entre 60 y 89 (inclusive) el estudiante ha aprobado
// Si la nota es mayor a 90, el estudiante ha obtenido una calificacion excelente
// Se debe utilizar if, else if,  y else para mostrar el mensaje correcto en la consola

let nota = 80
if (nota < 60){
    console.log("Reprobado");
} else if ( nota >= 60 && nota <= 89) {
    console.log("Aprobado");
} else {
    console.log ("Excelente!");}
    

