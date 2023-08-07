//por medio de id conectamos los elementos

const txtOp1 = document.getElementById("op1");
const txtOperador = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener('click', calcular);
function calcular(){
    console.log(txtOperador.value)
    const operador = txtOperador.value
    if(operador == "+" || operador == "-" || operador == "*" || operador == "/"){
        console.log("Calculo posible")
    }else{
        console.log("Calculo imposible")
    }
}