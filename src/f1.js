//import  from "./App.js";
const cantidad_input = document.querySelector("#cantidad");
const form = document.querySelector("#primera-funcion-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = cantidad_input.value;
  div.innerHTML = "<p> Cantidad de items: " + cantidad + "</p>";
});

