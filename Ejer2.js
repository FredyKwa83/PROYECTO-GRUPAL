/* Que el usuario pueda ingresar un número por teclado, si es mayor a 5 mostrar el mensaje
“aprobado”, si es menor a 5 mostrar el mensaje “no aprobado” */

var readline = require("readline-sync");
let p1 = readline.question("Ingrese un numero: ");
if((p1>5) && (p1<=10) ){
console.log("aprobado");
} else if ((p1>=0) && (p1<=5)){
    console.log("No aprobado")
}else {
    console.log("Nota no valida")
}