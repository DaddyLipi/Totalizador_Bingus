import impuesto from "./impuestoEstado.js";
import descuento from "./descuento.js";

const precio_input = document.querySelector("#precio");
const monto_input = document.querySelector("#cantidad");
const estado_input=document.querySelector("#state");
const form = document.querySelector("#primera-funcion-form");
const div = document.querySelector("#resultado2-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const monto = monto_input.value;
  const precio = precio_input.value;
  const estado = estado_input.value;
  var imp = impuesto(estado);
  var disc = descuento(precio);
  imp = imp * (precio * monto);
  disc = disc * (precio * monto);
  div.innerHTML ="<p> Impuesto: " + imp + " $,  Descuento: " + disc + " $</p>";
});