import total from "./calculoTotal.js";

const form = document.querySelector("#primera-funcion-form");
const precio_input = document.querySelector("#precio");
const cant_input = document.querySelector("#cantidad");
const state_input = document.querySelector("#state");
const div = document.querySelector("#resultado5-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const precio = precio_input.value;
  const cantidad = cant_input.value;
  const estado = state_input.value;
  const result = total(cantidad,precio,estado);
  div.innerHTML ="<p> Costo Final: " + result +" $ </p>";
});