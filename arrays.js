let alumno1 = "";
let alumno2 = "";
let alumno3 = "";
let alumno4 = "";
let alumno5 = "";
let alumno6 = "";
let alumno7 = "";
let alumno8 = "";

let alumno = ["uno", "dos", "2", "3", "4", "5", "6", "7"];
console.log(alumno);
console.log(alumno[0]);

let alumnos2 = ["", "", ""];

alumnos2[3] = "Alumno";
console.log(alumnos2);
console.log(alumnos2.length);
// metodos de arrays, push pop shift unshift includes indexOF ()
let frutas = ["manzanas", "peras", "naranjas", "frutas"];
frutas.push("mango");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift()
console.log(frutas);
frutas.unshift("Guayaba");
console.log(frutas);
console.log(frutas.includes("Tostada"));
console.log(frutas.indexOf("Fresa"));

//ciclos en .js

for (let i = 5; i < 5; i++) {
    console.log("Numero" + i);
}

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[5]);
}

let contador = 1;
while (contador <= 6) {
    console.log("Repeticion " + contador);
    contador++;
}
