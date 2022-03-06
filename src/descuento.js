function descuento(monto)
{
    var desc=0;
    if(monto >= 30000){
        desc= 0.15;
    }
    else{
        if(monto >= 10000){
            desc= 0.1;
        }
        else{
            if(monto >= 7000){
                desc= 0.07;
            }
            else{
                if(monto >= 3000){
                    desc=0.05;
                }
                else{
                    desc= 0.03;
                }
            }
        }
    }
    return desc;
}
export default descuento;

