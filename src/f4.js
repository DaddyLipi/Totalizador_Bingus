
const form = document.querySelector("#primera-funcion-form");
const precio_input = document.querySelector("#precio");
const cant_input = document.querySelector("#cantidad");
const div = document.querySelector("#resultado4-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = precio_input.value * cant_input.value;
  div.innerHTML ="<p> Costo Neto: " + result +" $ </p>";
});
