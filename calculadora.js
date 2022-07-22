let visorInput = document.getElementById("visor");
let select = document.getElementById("select");
let tecla = document.getElementById("tecla");
let n1 = "";
let n2 = "";
let operador = "";

function limpar() {
  visorInput.value = "";
  select.innerText = "";
}

function adicionar(numero) {
  visorInput.value += numero;
}

function clickOperador(n) {
  select.innerText = visorInput.value;
  operador = n;
  n1 = visorInput.value;
  visorInput.value = "";
  
  if (operador == "+") {    
    select.innerText +="+";        
  }

  if (operador == "-") {
    select.innerText += "-";
  }

  if (operador == "x") {
    select.innerText += "x";
  }

  if (operador == "/") {
    select.innerText += "/";
  }
}

function resultado() {
  n2 = visorInput.value;
  select.innerText += visorInput.value;
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
