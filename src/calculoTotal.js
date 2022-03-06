import impuesto from "./impuestoEstado.js";
import descuento from "./descuento.js";

function total(cantidad,costo,estado)
{
    let precio = cantidad * costo;
    let disc = descuento(precio);
    let imp = impuesto(estado);
    
    precio = precio + (precio * imp);
    alert(precio);
    precio = precio - (precio * disc);
    alert(precio);
    return precio;
}
export default total;