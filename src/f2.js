const precio_input = document.querySelector("#precio");
const form = document.querySelector("#primera-funcion-form");
const div = document.querySelector("#resultado2-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = precio_input.value;
  div.innerHTML ="<p> Precio de items: " + precio + "</p>";
});