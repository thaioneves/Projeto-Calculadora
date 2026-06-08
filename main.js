const botao = document.querySelector("#btnCalcular");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

//botao.addEventListener("click", soma);


function soma(){

let num1, num2, resCalculo;

num1 = Number(numero1.value);
num2 = Number(numero2.value);

resCalculo = num1+num2;
resultado.innerHTML = resCalculo;
}
botao.addEventListener("click", soma);
