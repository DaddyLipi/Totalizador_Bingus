import impuesto from "./impuestoEstado.js";
import descuento from "./descuento.js";

function total(cantidad,monto,estado)
{
    let precio = cantidad * monto;
    let disc = descuento(precio);
    let imp = impuesto(estado);
    precio = precio - (precio * disc) + (precio * imp);
    return precio;
}
export default total;