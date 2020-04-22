console.log("Olá, desenvolvedor!");
document.querySelector("#titulo").textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//IMC
for (var i = 0; i < pacientes.length; i++) {

  var valido = true;
  peso = pacientes[i].querySelector(".info-peso").textContent;
  if (peso < 0 || peso > 1000) {
      console.log("Peso inválido!");
      valido = false;
      pacientes[i].querySelector(".info-imc").textContent = "Peso inválido!";
      pacientes[i].classList.add("paciente-invalido")
  }
  var altura = pacientes[i].querySelector(".info-altura").textContent;
  if (altura < 0 || altura > 3.00){
      console.log("Altura inválida!");
      valido = false;
      pacientes[i].querySelector(".info-imc")
      .textContent = "Altura inválida!";
      pacientes[i].classList.add("paciente-invalido")
  }

  if (valido){
      var imc = calculaImc(pacientes[i].querySelector(".info-peso").textContent, pacientes[i].querySelector(".info-altura").textContent);
      pacientes[i].querySelector(".info-imc").textContent = imc;
  }
}

function calculaImc(peso, altura){
  var imc = peso/(altura*altura);
  imc = imc.toFixed(2);
  return imc;
}
