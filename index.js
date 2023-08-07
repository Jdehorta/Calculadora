//console.log("hola mundo jean"); //imprimir

var numero = 5; //variables

console.log(numero) //imprimir variable
console.log("mi edad es " + 35);

//constantes
const miConstante = 3
console.log(miConstante)

var x = 2
var y = 2
var result = x + y
console.log("El resultado de la suma es: " + result)

//condicionales
let miNumero = 6
if(miNumero==6){
    console.log("si, minumero es 6")
}else{
    console.log("No, el numero no es igual")
}

//bucles - ciclos

//for(let i=0; i<10; i++){
  //  console.log(i);
//}

function saludar(nombre, edad){
    console.log("hola chicos mi mombre es " + nombre);
    console.log("hola chicos mi edad es " + edad);
}

saludar("Jean", 35);

function multiplicar(num1, num2){
    let resultado = num1 * num2
    return resultado;
}

let recibidor = multiplicar(2,5);
console.log(recibidor);

//Arreglos o arrays
let miArreglo =["David", "Fernando", "Kevin", "Diego"];
//console.log(miArreglo)
for(let i = 0; i < 4 ; i++){
    console.log("Accediendo al indice: " + i);
    let mostrar = miArreglo[i];

    console.log(mostrar);

}

//Objetos
let persona = {
    nombre : "Jean",
    edad : 35,
    masculino : true
}

let persona2 = {
    nombre : "Danna",
    edad : 5,
    masculino : false
}

console.log(persona)
console.log(persona2)

