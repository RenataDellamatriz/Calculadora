let visorInput = document.getElementById("visor");
let tecla = document.getElementById("tecla");
let n1 = "";
let n2 = "";
let operador = "";

function limpar() {
  visorInput.value = "";
}

function adicionar(numero) {
      visorInput.value += numero;  
}

function clickOperador(n) {
  operador = n;
  n1 = visorInput.value;
  visorInput.value = "";
}

function resultado() {
  n2 = visorInput.value;
  let resultado;
  if (operador == "+") {
    resultado = Number(n1) + Number(n2);
  }

  if (operador == "-") {
    resultado = Number(n1) - Number(n2);
  }

  if (operador == "x") {
    resultado = Number(n1) * Number(n2);
  }

  if (operador == "/") {
    resultado = Number(n1) / Number(n2);
  }
  visorInput.value = resultado;
}
