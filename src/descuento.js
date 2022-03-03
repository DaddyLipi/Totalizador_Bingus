function descuento(monto)
{
    let desc=0;
    if(monto >= 30000){
        desc= 1.5;
    }
    else{
        if(monto >= 10000){
            desc= 1;
        }
        else{
            if(monto >= 7000){
                desc= 0.7;
            }
            else{
                if(monto >= 3000){
                    desc=0.5;
                }
                else{
                    desc= 0.3;
                }
            }
        }
    }
    return desc;
}
export default descuento

