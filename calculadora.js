let visorInput = document.getElementById("visor");
let select = document.getElementById("select");
let tecla = document.getElementById("tecla");

function limpar() {
  visorInput.value = "";
  select.innerText = "";
}

function adicionar(numero) {
  visorInput.value += numero;
}

//arrumar tecla enter receber resultado()
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    resultado()
  }
})


function verificarOperador() {
  const operadorIndex = visorInput.value.search(/[x+\/-]+/)
  const operador = visorInput.value[operadorIndex]
  return operador
}

function clickOperador(n) {
  let operador = verificarOperador()
  let numbers = visorInput.value.split(operador)
  if (numbers.length == 2) {
    resultado()
  }
  visorInput.value.replace(",", ".");
  visorInput.value += n;
}

function resultado() {
  let operador = verificarOperador()
  let numbers = visorInput.value.split(operador)

  let n1 = numbers[0].replace(",", ".")
  let n2 = numbers[1].replace(",", ".")

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
  select.innerText = `${n1} ${operador} ${n2}`
  visorInput.value = resultado.toString().replace(".", ",");
}

