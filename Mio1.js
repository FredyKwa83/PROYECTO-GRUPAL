
var readline = require("readline-sync");

console.log("PROGRAMA DE REGISTRO DE DARTOS DE ALUMNOS");
console.log("para salir del programa ingrese como nombre de alumno la palabra salir ");

let alumnos = [];
let notas =[];

let i=0

while (true){
    let nombre = readline.question("Ingresar Nombre: ");

    if (nombre=="salir"){
        console.log("El programa ha Terminado 👍")
        break;
        
    }
   

    let nota = readline.question("Ingresar Nota: ");

    alumnos[i]= nombre;
    notas [i] = nota;

    console.log("el alumno " + nombre + " fue guardado con nota: " + nota);

    i++
}

for (let i = 0; i < alumnos.length; i++) {
    console.log ("el alumno " + alumnos[i] + " tiene la nota " + notas[i])
}