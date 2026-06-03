function soma(){

let numero1, numero2, resultado;

numero1 = Number(document.querySelector("#num1").value);
numero2 = Number(document.querySelector("#num2").value);
resultado = document.querySelector("#resultado").innerHTML;

resultado = numero1+numero2;

document.querySelector("#resultado").innerHTML = resultado;

}

