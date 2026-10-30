function Nombrecompleto()   {
    alert("Augutus")
    alert("Cole")
}

//Nombrecompleto();

function Nombre (){
    console.log("Alberto");
}
function Apellido1 () {
    console.log("Albertoso")
}
function Apellido2 (){
    console.log("Amarillo");
}
function NomComp() {
   Nombre();
   Apellido1();
   Apellido2;
}
NomComp();

//Parametros

function saludo (nombre) {
    console.log("Hola " + nombre);
}
saludo("Carlos");
saludo("Joaquin");
saludo("Onichan uwu");

function Persona (nombre, edad) {
    console.log("Nombre: "+ nombre);
    console.log("Edad: " + edad);
}
Persona("Luis", 20);

function sumar(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
} 

let total = sumar(10, "5");
console.log(total);

function evaluaciones(calificacion) {
    if(calificacion >=7) {
        return "Aprobado";
    } else {
        return "Reprobaste";
    }
}
let resultado = evaluaciones(7);
console.log(resultado);





function VerificarEdad(edad) {
    if(edad >=18) {
        return "Es mayor de edad";
    } else {
         return "Es menor de edad";
    }
}
let estadoedad = VerificarEdad(18);
console.log(estadoedad);

