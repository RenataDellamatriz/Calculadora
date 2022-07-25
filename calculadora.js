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

//só da certo com um operador por vez
function clickOperador(n) {
  operador = n;
  if(n1){
    resultado()
  }
  n1 = visorInput.value.replace(",", ".");
  visorInput.value += operador;
}

function resultado() {
  let conta = visorInput.value.split(operador);
  n2 = conta[1].replace(",", ".")
  select.innerText = visorInput.value;
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
  visorInput.value = resultado.toString().replace(".", ",");
}
