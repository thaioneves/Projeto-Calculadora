const botao = document.querySelector("#btnSomar");
const botaoSubtracao = document.querySelector("#btnSubtrair");
const botaoMultiplicar = document.querySelector("#btnMultiplicar");
const botaoDivisao= document.querySelector("#btnDivisao");
const botaoLimpar = document.querySelector("#btnLimpar");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");
const caixaResultado = document.querySelectorAll(".box")[1];



function soma(){
let num1, num2, resCalculo;

if(validarEntradas() === true){
num1 = Number(numero1.value);
num2 = Number(numero2.value);
resCalculo = num1+num2;
caixaResultado.classList.remove("invisible")
exibirResultado(resCalculo);
}else{
    mostrarMensagemErro();
}
}

function subtrair(){
    let num1, num2, resCalculo;
if (validarEntradas() === true) {
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);
    resCalculo = num1 - num2;
    caixaResultado.classList.remove("invisible")
    exibirResultado(resCalculo);
  } else {
    mostrarMensagemErro(); 
  }
}

function multiplicar(){
  let num1, num2, resCalculo;
 
   if (validarEntradas() === true) {//com ambos
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);
    resCalculo = num1 * num2;
    exibirResultado(resCalculo);//com parametro sem retorno
  } else {
    mostrarMensagemErro(); //sem parametro e sem retorno
  }
}

function dividir(){
  let num1, num2, resCalculo;
 
   if (validarEntradas() === true) {//com ambos
    num1 = Number(numero1.value);
    num2 = Number(numero2.value);

        if (num2 === 0) {
            resultado.innerHTML = "Valores inválidos - Divisão por zero";
        } else {
            resCalculo = num1 / num2;

            caixaResultado.classList.remove("invisible");
            exibirResultado(resCalculo);
        }
  } else {
    mostrarMensagemErro(); //sem parametro e sem retorno
  }
}

function limparCampos(){
  numero1.value = "",
  numero2.value = "",
  resultado.innerHTML=""

}

function validarEntradas(){
    if (isNaN(numero1.value) || isNaN(numero2.value)) {
       
        return false;
    } else {
        return true;
    }
}

function mostrarMensagemErro(){
     resultado.innerHTML = "Valores inválidos. Por favor, insira números válidos."
}

function exibirResultado(valor){
    resultado.innerHTML = "Resultado: " + valor;

    if (valor >=0) {
    resultado.style.color = "lightgreen"
  } else {
     resultado.style.color = "red"
  }
}

botao.addEventListener("click", soma);
botaoSubtracao.addEventListener("click", subtrair);
botaoLimpar.addEventListener("click", limparCampos);
botaoMultiplicar.addEventListener("click", multiplicar);
botaoDivisao.addEventListener("click", dividir)
