import impuesto from "./impuestoEstado.js";
import descuento from "./descuento.js";

function total(cantidad,monto,estado)
{
    var precio = cantidad * monto;
    var disc = descuento(precio);
    var imp = impuesto(estado);
    precio = precio - (precio * disc) - (precio * imp);
    return precio;
}
export default total;