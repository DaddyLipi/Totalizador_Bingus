import impuesto from "./impuestoEstado.js";
const estado_input = document.querySelector("#state");
const form = document.querySelector("#primera-funcion-form");
const div = document.querySelector("#resultado3-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const estado = estado_input.value;
  const imp = impuesto(estado);
  div.innerHTML ="<p> Estado: " + estado +" --> "+ imp +" % </p>";
});

